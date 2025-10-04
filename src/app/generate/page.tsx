'use client';

import { useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import CharacterForm from '@/components/CharacterForm';
import SimpleCharacterDisplay from '@/components/SimpleCharacterDisplay';

interface SimpleCharacter {
  name: string;
  basicInformation: string;
  personality: string;
  background: string;
  relationships: string;
  interests: string;
  aestheticAndColors: string;
  communities: string;
  secretsAndFlaws: string;
  goals: string;
  mannerisms: string;
  meta: string;
}

export default function GeneratePage() {
  const [characterType, setCharacterType] = useLocalStorage('characterType', 'fantasy-hero');
  const [archetype, setArchetype] = useLocalStorage('archetype', 'hero');
  const [detailLevel, setDetailLevel] = useLocalStorage('detailLevel', 'detailed');
  const [prompt, setPrompt] = useLocalStorage('prompt', '');
  const [character, setCharacter] = useState<SimpleCharacter | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          characterType,
          archetype,
          detailLevel,
          prompt: prompt || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate character');
      }

      const data = await response.json();
      setCharacter(data);
    } catch (error) {
      console.error('Error:', error);
      setError('Sorry, there was an error generating your character. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async (content?: string) => {
    const textToCopy = content || JSON.stringify(character, null, 2);
    
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
        alert('Content copied to clipboard!');
      } else {
        // Fallback for browsers that don't support the Clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        alert('Content copied to clipboard!');
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy to clipboard');
    }
  };

  const handleClear = () => {
    setCharacterType('fantasy-hero');
    setArchetype('hero');
    setDetailLevel('detailed');
    setPrompt('');
    setCharacter(null);
    setError(null);
  };

  const handleLearnMore = (section: string, content: string) => {
    // For now, just copy the content. Could expand to show modal or detail view
    handleCopy(content);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Character Builder</h1>
          <p className="text-xl text-gray-600">Create unique characters with AI-powered personality generation</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="xl:col-span-1">
            <CharacterForm
              characterType={characterType}
              setCharacterType={setCharacterType}
              archetype={archetype}
              setArchetype={setArchetype}
              detailLevel={detailLevel}
              setDetailLevel={setDetailLevel}
              prompt={prompt}
              setPrompt={setPrompt}
              isGenerating={isGenerating}
              onGenerate={handleGenerate}
              onClear={handleClear}
            />
          </div>

          {/* Output Section */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Generated Character</h2>
                {character && (
                  <button
                    onClick={() => handleCopy()}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Copy JSON
                  </button>
                )}
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              {character ? (
                <SimpleCharacterDisplay 
                  character={character} 
                  onLearnMore={handleLearnMore}
                />
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-lg mb-2">Ready to create your character?</p>
                  <p className="text-sm">Fill out the form and click &quot;Generate Character&quot; to get started</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}