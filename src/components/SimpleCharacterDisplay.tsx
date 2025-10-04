'use client';

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

interface SimpleCharacterDisplayProps {
  character: SimpleCharacter;
  onLearnMore?: (section: string, content: string) => void;
}

export default function SimpleCharacterDisplay({ character, onLearnMore }: SimpleCharacterDisplayProps) {
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
      </div>

      {/* Basic Information */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Basic Information</h2>
          <button
            onClick={() => handleLearnMore('basic-info', character.basicInformation)}
            className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            Learn More →
          </button>
        </div>
        <p className="text-gray-600 leading-relaxed">{character.basicInformation}</p>
      </div>

      {/* Personality */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Personality</h2>
          <button
            onClick={() => handleLearnMore('personality', character.personality)}
            className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            Learn More →
          </button>
        </div>
        <p className="text-gray-600 leading-relaxed">{character.personality}</p>
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
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">{character.background}</p>
      </div>

      {/* Goals */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Goals & Motivations</h2>
          <button
            onClick={() => handleLearnMore('goals', character.goals)}
            className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            Learn More →
          </button>
        </div>
        <p className="text-gray-600 leading-relaxed">{character.goals}</p>
      </div>

      {/* Interests & Communities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Interests & Hobbies</h2>
            <button
              onClick={() => handleLearnMore('interests', character.interests)}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              Learn More →
            </button>
          </div>
          <p className="text-gray-600 leading-relaxed">{character.interests}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Communities</h2>
            <button
              onClick={() => handleLearnMore('communities', character.communities)}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              Learn More →
            </button>
          </div>
          <p className="text-gray-600 leading-relaxed">{character.communities}</p>
        </div>
      </div>

      {/* Aesthetic & Relationships */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Aesthetic & Style</h2>
            <button
              onClick={() => handleLearnMore('aesthetic', character.aestheticAndColors)}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              Learn More →
            </button>
          </div>
          <p className="text-gray-600 leading-relaxed">{character.aestheticAndColors}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Relationships</h2>
            <button
              onClick={() => handleLearnMore('relationships', character.relationships)}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              Learn More →
            </button>
          </div>
          <p className="text-gray-600 leading-relaxed">{character.relationships}</p>
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
              onClick={() => handleLearnMore('mannerisms', character.mannerisms)}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              Learn More →
            </button>
          </div>
          <p className="text-gray-600 leading-relaxed">{character.mannerisms}</p>
        </div>
      </div>
    </div>
  );
}