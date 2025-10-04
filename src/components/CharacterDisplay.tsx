'use client';

import { Character } from '@/types/character';

interface CharacterDisplayProps {
  character: Character;
  onLearnMore?: (section: string, content: string) => void;
}

export default function CharacterDisplay({ character, onLearnMore }: CharacterDisplayProps) {
  const handleLearnMore = (section: string, content: string) => {
    if (onLearnMore) {
      onLearnMore(section, content);
    }
  };

  return (
    <div className="space-y-6">
      {/* Character Header */}
      <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{character.name}</h1>
        <div className="flex flex-wrap justify-center gap-2 text-sm">
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
            {character.meta.characterType.replace('-', ' ')}
          </span>
          <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">
            {character.meta.archetype}
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            {character.meta.detailLevel} detail
          </span>
        </div>
      </div>

      {/* Basic Information */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Basic Information</h2>
          <button
            onClick={() => handleLearnMore('basic-info', JSON.stringify(character.basicInformation))}
            className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            Learn More →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="font-medium text-gray-700">Age:</span>
            <span className="ml-2 text-gray-600">{character.basicInformation.age}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Occupation:</span>
            <span className="ml-2 text-gray-600">{character.basicInformation.occupation}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Location:</span>
            <span className="ml-2 text-gray-600">{character.basicInformation.location}</span>
          </div>
        </div>
        <div className="mt-4">
          <span className="font-medium text-gray-700">Appearance:</span>
          <p className="mt-1 text-gray-600">{character.basicInformation.appearance}</p>
        </div>
      </div>

      {/* Personality */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Personality</h2>
          <button
            onClick={() => handleLearnMore('personality', JSON.stringify(character.personality))}
            className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            Learn More →
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <span className="font-medium text-gray-700">Core Traits:</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {character.personality.coreTraits.map((trait, index) => (
                <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {trait}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="font-medium text-gray-700">Motivations:</span>
            <p className="mt-1 text-gray-600">{character.personality.motivations}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Fears:</span>
            <p className="mt-1 text-gray-600">{character.personality.fears}</p>
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Background & History</h2>
          <button
            onClick={() => handleLearnMore('background', character.background)}
            className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            Learn More →
          </button>
        </div>
        <p className="text-gray-600 leading-relaxed">{character.background}</p>
      </div>

      {/* Aesthetic & Colors */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Aesthetic & Colors</h2>
          <button
            onClick={() => handleLearnMore('aesthetic', JSON.stringify(character.aestheticAndColors))}
            className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            Learn More →
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <span className="font-medium text-gray-700">Style:</span>
            <p className="mt-1 text-gray-600">{character.aestheticAndColors.style}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Favorite Colors:</span>
            <div className="mt-2 flex flex-wrap gap-3">
              {character.aestheticAndColors.colors.map((color, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className="w-6 h-6 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <span className="text-sm text-gray-600">{color.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interests & Communities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Interests & Hobbies</h2>
            <button
              onClick={() => handleLearnMore('interests', character.interests.join(', '))}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              Learn More →
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {character.interests.map((interest, index) => (
              <span key={index} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Communities</h2>
            <button
              onClick={() => handleLearnMore('communities', character.communities.join(', '))}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              Learn More →
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {character.communities.map((community, index) => (
              <span key={index} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm">
                {community}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Relationships */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Relationships</h2>
          <button
            onClick={() => handleLearnMore('relationships', character.relationships.join(', '))}
            className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            Learn More →
          </button>
        </div>
        <div className="space-y-2">
          {character.relationships.map((relationship, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg">
              <p className="text-gray-700">{relationship}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Goals */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Goals & Motivations</h2>
          <button
            onClick={() => handleLearnMore('goals', JSON.stringify(character.goals))}
            className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            Learn More →
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <span className="font-medium text-gray-700">Ultimate Motivation:</span>
            <p className="mt-1 text-gray-600">{character.goals.ultimateMotivation}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="font-medium text-gray-700">Long-term Goals:</span>
              <ul className="mt-2 space-y-1">
                {character.goals.longTerm.map((goal, index) => (
                  <li key={index} className="text-gray-600 text-sm">• {goal}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-medium text-gray-700">Short-term Goals:</span>
              <ul className="mt-2 space-y-1">
                {character.goals.shortTerm.map((goal, index) => (
                  <li key={index} className="text-gray-600 text-sm">• {goal}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Secrets & Flaws and Mannerisms */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Secrets & Flaws</h2>
            <button
              onClick={() => handleLearnMore('secrets', character.secretsAndFlaws)}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              Learn More →
            </button>
          </div>
          <p className="text-gray-600 leading-relaxed">{character.secretsAndFlaws}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Mannerisms</h2>
            <button
              onClick={() => handleLearnMore('mannerisms', character.mannerisms.join(', '))}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              Learn More →
            </button>
          </div>
          <div className="space-y-2">
            {character.mannerisms.map((mannerism, index) => (
              <div key={index} className="p-2 bg-gray-50 rounded text-sm text-gray-700">
                {mannerism}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}