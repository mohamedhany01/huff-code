import { HuffmanEncoder } from './HuffmanEncoder';

describe('Testing encoder module', () => {
  it('should correctly encode basic input text', () => {
    const input = 'foo';
    const expected = '011';

    const encoder = new HuffmanEncoder(input);

    expect(encoder.getEncodedText()).toBe(expected);
  });

  it('should correctly encode a single character', () => {
    const input = 'a';
    const expected = '0';

    const encoder = new HuffmanEncoder(input);

    expect(encoder.getEncodedText()).toBe(expected);
  });

  it('should handle empty input text gracefully', () => {
    const input = '';
    const expected = null;

    const encoder = new HuffmanEncoder(input);

    expect(encoder.getEncodedText()).toBe(expected);
  });

  it('should correctly encode with a single entry frequency table', () => {
    const input = 'a';
    const expectedEncodedText = '0';
    const expectedFrequencies = [{ key: 'a', value: 1 }];

    const encoder = new HuffmanEncoder(input);

    expect(encoder.getEncodedText()).toBe(expectedEncodedText);
    expect(encoder.getFrequencies()).toEqual(expectedFrequencies);
  });

  it('should correctly encode with multiple entries frequency table', () => {
    const input = 'foo';
    const expected: { key: string; value: number }[] = [
      { key: 'f', value: 1 },
      { key: 'o', value: 2 },
    ];

    const encoder = new HuffmanEncoder(input);

    expect(encoder.getFrequencies()).toEqual(expected);
  });
});
