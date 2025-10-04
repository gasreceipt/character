'use client';

import { useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Character } from '@/types/character';
import CharacterForm from '@/components/CharacterForm';
import CharacterDisplay from '@/components/CharacterDisplay';

export default function GeneratePage() {
  const [characterType, setCharacterType] = useLocalStorage('characterType', 'fantasy-hero');
  const [archetype, setArchetype] = useLocalStorage('archetype', 'hero');
  const [detailLevel, setDetailLevel] = useLocalStorage('detailLevel', 'detailed');
  const [prompt, setPrompt] = useLocalStorage('prompt', '');
  const [character, setCharacter] = useState<Character | null>(null);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Character Forge
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Forge incredibly detailed characters with rich personalities, deep backstories, and intricate details. 
            Perfect for your next story, game, or creative project.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            💾 Your character details are automatically saved and will persist between sessions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Character Builder Panel */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Character Builder</h2>
            
            {/* Character Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Character Type
              </label>
              <select
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="fantasy-hero">⚔️ Fantasy Hero</option>
                <option value="modern-professional">� Modern Professional</option>
                <option value="sci-fi-character">🚀 Sci-Fi Character</option>
                <option value="historical-figure">🏛️ Historical Figure</option>
                <option value="mystery-character">🔍 Mystery Character</option>
                <option value="everyday-person">� Everyday Person</option>
                <option value="villain">� Villain/Antagonist</option>
                <option value="side-character">🎭 Supporting Character</option>
              </select>
            </div>

            {/* Personality Archetype */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Personality Archetype
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="hero">🦸 The Hero</option>
                <option value="mentor">🧙 The Mentor</option>
                <option value="rebel">🤘 The Rebel</option>
                <option value="explorer">🗺️ The Explorer</option>
                <option value="caregiver">❤️ The Caregiver</option>
                <option value="creator">🎨 The Creator</option>
                <option value="jester">🃏 The Jester</option>
                <option value="sage">📚 The Sage</option>
                <option value="innocent">🌟 The Innocent</option>
                <option value="ruler">👑 The Ruler</option>
              </select>
            </div>

            {/* Detail Level */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detail Level
              </label>
              <select
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="basic">📝 Basic Profile</option>
                <option value="detailed">📖 Detailed Character</option>
                <option value="comprehensive">📚 Comprehensive Biography</option>
              </select>
            </div>

            {/* Character Concept */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Character Concept & Background
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your character concept. Include age, occupation, setting, key personality traits, or any specific details you want included..."
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Forge Button */}
            <button
              onClick={handleGenerate}
              disabled={isLoading || !prompt.trim()}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl mb-4"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Forging Character...
                </div>
              ) : (
                '⚔️ Forge Character'
              )}
            </button>

            {/* Clear Button */}
            <button
              onClick={handleClearAll}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-colors duration-200 border border-gray-300"
            >
              Clear All Data
            </button>

            {/* Error Display */}
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
          </div>

          {/* Output Panel */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Character Sheet</h2>
              <div className="flex items-center space-x-3">
                {copySuccess && (
                  <span className="text-green-600 text-sm font-medium">✓ Copied!</span>
                )}
                {copyError && (
                  <span className="text-red-600 text-sm font-medium">⚠ {copyError}</span>
                )}
                {generatedContent && (
                  <button
                    onClick={copyToClipboard}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                  >
                    Copy Character
                  </button>
                )}
              </div>
            </div>

            <div className="min-h-[400px] max-h-[600px] overflow-y-auto">
              {generatedContent ? (
                <div className="prose prose-purple max-w-none">
                  <ReactMarkdown>{generatedContent}</ReactMarkdown>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-gray-500">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="text-lg">Your character will appear here</p>
                    <p className="text-sm mt-2">Fill out the character builder and click "Forge Character" to create your unique character</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-purple-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">✨ Character Building Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p className="font-medium text-gray-800 mb-1">Be Specific</p>
              <p>Include age, occupation, key personality traits, and background details for richer characters.</p>
            </div>
            <div>
              <p className="font-medium text-gray-800 mb-1">Add Conflict</p>
              <p>Mention fears, flaws, or internal struggles to create more compelling, realistic characters.</p>
            </div>
            <div>
              <p className="font-medium text-gray-800 mb-1">Set the Scene</p>
              <p>Describe the world, time period, or setting where your character exists.</p>
            </div>
            <div>
              <p className="font-medium text-gray-800 mb-1">Explore Further</p>
              <p>Use the "Learn More with AI" buttons to dive deeper into specific character aspects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}