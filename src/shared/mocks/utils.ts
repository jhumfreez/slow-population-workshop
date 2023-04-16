export namespace Utils {
  export const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  export const pickRandomIndex = (options: unknown[]) => {
    if (options.length === 0) {
      return 0;
    }
    const maxIndex = options.length - 1;
    return getRandomInt(maxIndex);
  };

  /**
   * @example "fb841e65-7093-44aa-8808-e5981263b8a2"
   */
  export const getUniqueId = (): string => {
    return crypto.randomUUID();
  };
}
