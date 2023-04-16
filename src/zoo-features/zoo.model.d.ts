export interface Species {
  /**
   * UUID format
   */
  id: string;
  commonName: string;
  categories?: string[];
  location: Habitat;
  upkeep: UpkeepComplexity;
}

export interface Animal {
  /**
   * UUID format
   */
  id: string;
  name: string;
  speciesId: string;
}

export interface Habitat {
  countries?: string[];
  biomes: string[];
}

export enum UpkeepComplexity {
  LOW = 'low',
  MEDIUM = 'med',
  HIGH = 'high',
}

export interface Zoo {
  title: string;
  inventory: Animal[];
  acceptingNewExhibits: boolean;
}
