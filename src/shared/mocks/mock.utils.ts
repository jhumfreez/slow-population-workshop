import { Utils } from './utils';

export namespace MockUtils {
  export const getFirstNames = (): string[] => {
    return [
      'Maria',
      'Amanda',
      'Joseph',
      'Suzanne',
      'Ernest',
      'Jessica',
      'Jeff',
      'John',
      'Rachel',
      'Megan',
      'Alexander',
      'Sandra',
      'Jeffery',
      'Matthew',
      'Lindsey',
      'James',
      'Bryan',
    ];
  };

  /**
   * Get a single name from list of mock names
   */
  export const getRandomName = () => {
    const names = getFirstNames();
    return names[Utils.pickRandomIndex(names)];
  };
}
