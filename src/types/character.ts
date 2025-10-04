export interface Character {
  name: string;
  basicInformation: {
    age: string;
    appearance: string;
    occupation: string;
    location: string;
  };
  personality: {
    coreTraits: string[];
    motivations: string;
    fears: string;
  };
  background: string;
  relationships: string[];
  interests: string[];
  aestheticAndColors: {
    style: string;
    colors: {
      name: string;
      hex: string;
    }[];
  };
  communities: string[];
  secretsAndFlaws: string;
  goals: {
    longTerm: string[];
    shortTerm: string[];
    ultimateMotivation: string;
  };
  mannerisms: string[];
  meta: {
    characterType: string;
    archetype: string;
    detailLevel: string;
    model: string;
    timestamp: string;
  };
}

export type CharacterType = 
  | 'fantasy-hero'
  | 'modern-professional'
  | 'sci-fi-character'
  | 'historical-figure'
  | 'mystery-character'
  | 'villain'
  | 'side-character'
  | 'general';

export type ArchetypeType = 
  | 'hero'
  | 'mentor'
  | 'rebel'
  | 'explorer'
  | 'caregiver'
  | 'creator'
  | 'jester'
  | 'sage'
  | 'innocent'
  | 'ruler'
  | 'general';

export type DetailLevel = 
  | 'basic'
  | 'detailed'
  | 'comprehensive'
  | 'default';