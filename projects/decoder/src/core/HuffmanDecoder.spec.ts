import { HuffmanDecoder } from './HuffmanDecoder';
import { Entry } from './utilities/interface/Entry.interface';

describe('Testing decoder module', () => {
  it('should correctly decode basic encoded text', () => {
    const inputText = '011';
    const inputTable: Entry[] = [
      { key: 'f', value: 1 },
      { key: 'o', value: 2 },
    ];
    const expected = 'foo';

    const decoder = new HuffmanDecoder(inputText, inputTable);

    expect(decoder.getDecodedText()).toBe(expected);
  });

  it('should handle empty input gracefully', () => {
    const inputText = '';
    const inputTable: Entry[] = [];
    const expected = '';

    const decoder = new HuffmanDecoder(inputText, inputTable);

    expect(decoder.getDecodedText()).toBe(expected);
  });

  it('should correctly decode with a single entry decoding table', () => {
    const inputText = '0';
    const inputTable: { key: string; value: number }[] = [
      { key: 'a', value: 1 },
    ];
    const expected = 'a';

    const decoder = new HuffmanDecoder(inputText, inputTable);

    expect(decoder.getDecodedText()).toBe(expected);
  });

  it('should correctly decode with multiple entries decoding table', () => {
    const inputText = '011';
    const inputTable: { key: string; value: number }[] = [
      { key: 'f', value: 1 },
      { key: 'o', value: 2 },
    ];
    const expected = 'foo';

    const decoder = new HuffmanDecoder(inputText, inputTable);

    expect(decoder.getDecodedText()).toBe(expected);
  });

  it('should throw an error on an invalid bit in encoded text', () => {
    const invalidBit = '2';
    const inputText = `01${invalidBit}`; // Output: 012
    const inputTable: { key: string; value: number }[] = [
      { key: 'f', value: 1 },
      { key: 'o', value: 2 },
    ];
    const expected = `Invalid bit: ${invalidBit}`;

    expect(() => new HuffmanDecoder(inputText, inputTable)).toThrowError(
      expected
    );
  });
});
