import { MockUtils } from 'src/shared/mocks/mock.utils';
import { Utils } from 'src/shared/mocks/utils';
import { Species, Animal, UpkeepComplexity, Zoo } from '../zoo.model';

export const mockSpecies: Species[] = [
  {
    commonName: 'Koala',
    categories: ['mammal', 'marsupial', 'herbivore'],
    location: {
      countries: ['Australia'],
      biomes: ['forest'],
    },
    upkeep: UpkeepComplexity.LOW,
    id: Utils.getUniqueId(),
  },
  {
    commonName: 'Bengal Tiger',
    categories: ['mammal', 'big cat', 'carnivore'],
    location: {
      countries: ['India'],
      biomes: ['jungle'],
    },
    upkeep: UpkeepComplexity.HIGH,
    id: Utils.getUniqueId(),
  },
  {
    commonName: 'Great White Shark',
    categories: ['shark', 'carnivore'],
    location: {
      countries: ['North America'],
      biomes: ['Salt Water', 'Atlantic Ocean'],
    },
    upkeep: UpkeepComplexity.HIGH,
    id: Utils.getUniqueId(),
  },
  {
    commonName: 'Peacock',
    categories: ['bird', 'fowl', 'herbivore'],
    location: {
      countries: ['India'],
      biomes: ['forest'],
    },
    upkeep: UpkeepComplexity.LOW,
    id: Utils.getUniqueId(),
  },
  {
    commonName: 'Emperor Penguin',
    categories: ['bird', 'fowl', 'herbivore'],
    location: {
      countries: [],
      biomes: ['tundra'],
    },
    upkeep: UpkeepComplexity.MEDIUM,
    id: Utils.getUniqueId(),
  },
  {
    commonName: 'Ostrich',
    categories: ['bird', 'fowl', 'herbivore'],
    location: {
      countries: ['Madagascar', 'Saudi Arabia'],
      biomes: ['sahara'],
    },
    upkeep: UpkeepComplexity.MEDIUM,
    id: Utils.getUniqueId(),
  },
];

export const mockZooState: Zoo = {
  title: 'San Diego Zoo',
  acceptingNewExhibits: true,
  inventory: [],
};

export const generateMockInventory = (
  quantity: number = 1,
  speciesIds: Set<string>
): Animal[] => {
  const speciesIdList: string[] = Array.from(speciesIds);
  const inventory: Animal[] = [];
  for (let i = 0; i <= quantity; i++) {
    const uniqueAnimal: Animal = {
      id: Utils.getUniqueId(),
      name: MockUtils.getRandomName(),
      speciesId: speciesIdList[Utils.pickRandomIndex(speciesIdList)],
    };
    inventory.push(uniqueAnimal);
  }
  return inventory;
};
