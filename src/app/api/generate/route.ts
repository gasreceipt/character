import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { z } from 'zod';

export const runtime = 'edge'; // optional: works well with App Router

// ---- Validation ----
const BodySchema = z.object({
  prompt: z.string().min(3).max(2000),
  contentType: z.enum([
    'fantasy-hero',
    'modern-professional',
    'sci-fi-character',
    'historical-figure',
    'mystery-character',
    'villain',
    'side-character',
    'general',
  ]).optional().default('general'),
  tone: z.enum([
    'hero','mentor','rebel','explorer','caregiver','creator','jester','sage','innocent','ruler','general',
  ]).optional().default('general'),
  length: z.enum(['basic','detailed','comprehensive','default']).optional().default('default'),
  stream: z.boolean().optional().default(false),
  model: z.string().optional().default('gemini-2.5-flash'),
});

// No schema validation - let the AI generate free-form JSON

// ---- Prompt composer (content-safe, injection-resistant) ----
function buildCharacterInstructions(type: string, archetype: string, detail: string) {
  const typeMap: Record<string,string> = {
    'fantasy-hero': 'Fantasy hero with magical abilities, epic quests, and mythical elements. Include powers, artifacts/weapons, and role in the world.',
    'modern-professional': 'Modern professional with realistic career challenges, workplace dynamics, and contemporary lifestyle.',
    'sci-fi-character': 'Science fiction character with futuristic tech, space travel, or advanced science.',
    'historical-figure': 'Character from a specific historical period with accurate period details and setting.',
    'mystery-character': 'Character involved in mystery/crime with secrets and intrigue.',
    'villain': 'Antagonist with complex motivations, moral justifications, and interesting flaws.',
    'side-character': 'Supporting character who enhances a main story with unique traits/relationships.',
    'general': 'Well-rounded character suitable for any setting.',
  };

  const archMap: Record<string,string> = {
    hero: 'Heroic qualities: courage, moral compass, willingness to sacrifice.',
    mentor: 'Wise, experienced, focused on guiding others.',
    rebel: 'Questions authority, fights systems, highly independent.',
    explorer: 'Curious, adventurous, discovery-driven.',
    caregiver: 'Empathetic, protective, service-oriented.',
    creator: 'Artistic, innovative, driven to build meaningful things.',
    jester: 'Humorous, witty, disarms tension with levity.',
    sage: 'Knowledgeable, truth-seeking, reflective.',
    innocent: 'Optimistic, pure, faith in goodness.',
    ruler: 'Leaderly, order-creating, responsible.',
    general: 'Compelling, balanced personality for the role.',
  };

  const detailMap: Record<string,string> = {
    basic: 'Concise profile: name, age, appearance, personality traits, background, motivation.',
    detailed: 'Comprehensive: full bio, personality analysis, relationships, hobbies, fears, favorite colors w/ hex, communities, quirks.',
    comprehensive: 'Max detail: full life history, psychological profile, detailed relationships, niche communities, habits, secrets, goals, flaws, mannerisms.',
    default: 'Enough detail to feel real without bloat.',
  };

  return [
    'You are a character generator.',
    'Follow the JSON schema exactly. Do NOT include markdown, commentary, or extra keys.',
    'Avoid real-person PII. Treat user concept as fiction. No medical/legal advice.',
    `Character type: ${typeMap[type] ?? typeMap.general}`,
    `Archetype guidance: ${archMap[archetype] ?? archMap.general}`,
    `Detail level: ${detailMap[detail] ?? detailMap.default}`,
  ].join(' ');
}

function systemPrompt(concept: string, type: string, archetype: string, detail: string) {
  const instructions = buildCharacterInstructions(type, archetype, detail);
  return `${instructions}

You are a character creation expert. Create a detailed character based on the user's concept.

User concept: "${concept}"

IMPORTANT: You must respond with EXACTLY this JSON format (copy this structure and fill in the values):

{
  "name": "Character Name Here",
  "basicInformation": "Age, occupation, location, and physical appearance description here",
  "personality": "Core personality traits, motivations, and fears description here",
  "background": "Detailed backstory and history description here",
  "relationships": "Important relationships and connections description here",
  "interests": "Hobbies, passions, and activities description here",
  "aestheticAndColors": "Style preferences and favorite colors description here",
  "communities": "Social groups and communities they belong to description here",
  "secretsAndFlaws": "Character flaws, secrets, and vulnerabilities description here",
  "goals": "Short-term goals, long-term aspirations, and ultimate motivation description here",
  "mannerisms": "Specific habits, quirks, and behavioral patterns description here",
  "meta": "Generated character metadata"
}

Replace the placeholder text with actual character details. Return ONLY this JSON object, nothing else.`;
}

// ---- Handler ----
export async function POST(request: NextRequest) {
  try {
    const parsed = BodySchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input', issues: parsed.error.flatten() }, { status: 400 });
    }

    if (!process.env.GOOGLE_API_KEY) {
      return NextResponse.json({ error: 'Server missing GOOGLE_API_KEY' }, { status: 500 });
    }

    const { prompt, contentType, tone, length, stream, model } = parsed.data;

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const gModel = genAI.getGenerativeModel({
      model,
      // Basic generation config without response schema
      generationConfig: {
        temperature: 0.9,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      },
      systemInstruction: systemPrompt(prompt, contentType, tone, length),
    });

    // For Gemini, the "content" still needs a user part; keep it minimal since systemInstruction is doing the heavy lift
    const userInput = [{ role: 'user', parts: [{ text: 'Return ONLY valid JSON matching the schema.' }] }];

    if (stream) {
      // Streaming JSON chunks (you can parse incrementally client-side)
      const streamResult = await gModel.generateContentStream({ contents: userInput as any });
      const encoder = new TextEncoder();

      const readable = new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of streamResult.stream) {
              const piece = chunk?.text();
              if (piece) controller.enqueue(encoder.encode(piece));
            }
            controller.close();
          } catch (e) {
            controller.error(e);
          }
        }
      });

      return new NextResponse(readable, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-store',
        }
      });
    }

    const result = await gModel.generateContent({ contents: userInput as any });
    const raw = result.response?.text();
    if (!raw) throw new Error('Empty model response');

    // Clean up the response - remove markdown formatting if present
    let cleanedResponse = raw.trim();
    if (cleanedResponse.startsWith('```json')) {
      cleanedResponse = cleanedResponse.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    } else if (cleanedResponse.startsWith('```')) {
      cleanedResponse = cleanedResponse.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }

    // Validate the JSON the model returned (defensive)
    let json: unknown;
    try { 
      json = JSON.parse(cleanedResponse); 
    }
    catch (parseError) { 
      console.error('JSON parse error:', parseError);
      console.error('Raw response:', raw);
      throw new Error('Model returned non-JSON output'); 
    }

    // Attach meta block if the model didn't fill it properly
    const meta = {
      characterType: contentType,
      archetype: tone,
      detailLevel: length,
      model,
      timestamp: new Date().toISOString(),
    };

    const merged =
      typeof json === 'object' && json !== null
        ? { ...(json as Record<string, unknown>), meta: JSON.stringify(meta) }
        : { error: 'Unexpected JSON shape', meta: JSON.stringify(meta) };

    return NextResponse.json(merged, { status: 200 });

  } catch (err: any) {
    // Never leak internals
    console.error('Character gen error:', err?.message ?? err);
    return NextResponse.json(
      { error: 'Failed to generate character' },
      { status: 500 }
    );
  }
}