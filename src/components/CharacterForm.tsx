'use client';

interface CharacterFormProps {
  characterType: string;
  setCharacterType: (type: string) => void;
  archetype: string;
  setArchetype: (archetype: string) => void;
  detailLevel: string;
  setDetailLevel: (level: string) => void;
  prompt: string;
  setPrompt: (prompt: string) => void;
  isGenerating: boolean;
  onGenerate: () => void;
  onClear: () => void;
}

export default function CharacterForm({
  characterType,
  setCharacterType,
  archetype,
  setArchetype,
  detailLevel,
  setDetailLevel,
  prompt,
  setPrompt,
  isGenerating,
  onGenerate,
  onClear
}: CharacterFormProps) {
  const characterTypes = [
    { value: 'fantasy-hero', label: 'Fantasy Hero', description: 'Brave warriors and adventurers' },
    { value: 'modern-professional', label: 'Modern Professional', description: 'Contemporary workplace characters' },
    { value: 'sci-fi-explorer', label: 'Sci-Fi Explorer', description: 'Futuristic space travelers' },
    { value: 'mystery-detective', label: 'Mystery Detective', description: 'Investigative problem solvers' },
    { value: 'everyday-person', label: 'Everyday Person', description: 'Relatable, ordinary people' },
    { value: 'creative-artist', label: 'Creative Artist', description: 'Artistic and creative souls' }
  ];

  const archetypes = [
    { value: 'hero', label: 'Hero', description: 'Courageous leaders and champions' },
    { value: 'mentor', label: 'Mentor', description: 'Wise guides and teachers' },
    { value: 'rebel', label: 'Rebel', description: 'Independent rule-breakers' },
    { value: 'explorer', label: 'Explorer', description: 'Curious adventurers' },
    { value: 'creator', label: 'Creator', description: 'Innovative builders' },
    { value: 'caregiver', label: 'Caregiver', description: 'Nurturing protectors' },
    { value: 'jester', label: 'Jester', description: 'Playful entertainers' },
    { value: 'sage', label: 'Sage', description: 'Knowledge seekers' }
  ];

  const detailLevels = [
    { value: 'basic', label: 'Basic', description: 'Essential details only' },
    { value: 'detailed', label: 'Detailed', description: 'Rich character development' },
    { value: 'comprehensive', label: 'Comprehensive', description: 'Complete character bible' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Your Character</h2>
        <p className="text-gray-600">Customize the parameters to generate a unique character</p>
      </div>

      {/* Character Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">Character Type</label>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {characterTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => setCharacterType(type.value)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                characterType === type.value
                  ? 'border-purple-500 bg-purple-50 text-purple-900'
                  : 'border-gray-200 hover:border-gray-300 bg-white text-gray-700'
              }`}
            >
              <div className="font-medium text-sm">{type.label}</div>
              <div className="text-xs text-gray-500 mt-1">{type.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Archetype */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">Personality Archetype</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {archetypes.map((arch) => (
            <button
              key={arch.value}
              onClick={() => setArchetype(arch.value)}
              className={`p-3 rounded-lg border-2 text-left transition-all ${
                archetype === arch.value
                  ? 'border-pink-500 bg-pink-50 text-pink-900'
                  : 'border-gray-200 hover:border-gray-300 bg-white text-gray-700'
              }`}
            >
              <div className="font-medium text-sm">{arch.label}</div>
              <div className="text-xs text-gray-500 mt-1">{arch.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail Level */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">Detail Level</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {detailLevels.map((level) => (
            <button
              key={level.value}
              onClick={() => setDetailLevel(level.value)}
              className={`p-4 rounded-lg border-2 text-center transition-all ${
                detailLevel === level.value
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-200 hover:border-gray-300 bg-white text-gray-700'
              }`}
            >
              <div className="font-medium">{level.label}</div>
              <div className="text-sm text-gray-500 mt-1">{level.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Prompt */}
      <div>
        <label htmlFor="prompt" className="block text-sm font-semibold text-gray-900 mb-2">
          Additional Context (Optional)
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Add any specific details, setting, or requirements for your character..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          rows={4}
        />
        <p className="text-xs text-gray-500 mt-1">
          Example: &quot;Set in Victorian London&quot; or &quot;Has a mysterious past&quot; or &quot;Works as a space engineer&quot;
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
        <button
          onClick={onGenerate}
          disabled={isGenerating}
          className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
            isGenerating
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
          }`}
        >
          {isGenerating ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating Character...
            </span>
          ) : (
            'Generate Character'
          )}
        </button>
        
        <button
          onClick={onClear}
          className="sm:w-auto px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          Clear Form
        </button>
      </div>
    </div>
  );
}