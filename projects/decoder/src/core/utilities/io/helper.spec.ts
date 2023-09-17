import { StringManager } from './helper';

describe('StringManager module', () => {
  let stringManager: StringManager;

  beforeEach(() => {
    stringManager = new StringManager();
  });

  describe('clean method', () => {
    it('should remove leading and trailing whitespace', () => {
      const input = '  Hello, World!  ';
      const expectedOutput = 'Hello, World!';

      const cleanedText = stringManager.clean(input);

      expect(cleanedText).toEqual(expectedOutput);
    });
  });

  describe('isEmpty method', () => {
    it('should return true for an empty string', () => {
      const input = '';

      const isEmpty = stringManager.isEmpty(input);

      expect(isEmpty).toBe(true);
    });

    it('should return false for a non-empty string', () => {
      const input = 'Hello, World!';

      const isEmpty = stringManager.isEmpty(input);

      expect(isEmpty).toBe(false);
    });
  });
});
