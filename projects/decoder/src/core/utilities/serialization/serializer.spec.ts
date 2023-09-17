import { deserializeFrequencies, serializeFrequencies } from './serializer';

describe('Serialize frequencies', () => {
  it('should serialize an array of frequencies to JSON', () => {
    const frequencies: { key: string; value: number }[] = [
      { key: 'a', value: 2 },
      { key: 'b', value: 3 },
    ];

    const serialized: string = serializeFrequencies(frequencies);

    expect(() => JSON.parse(serialized)).not.toThrow();
  });
});

describe('Deserialize frequencies', () => {
  it('should deserialize a JSON string to an array of frequencies', () => {
    const frequenciesJson = '[{"key":"a","value":2},{"key":"b","value":3}]';

    const deserialized = deserializeFrequencies(frequenciesJson);

    expect(Array.isArray(deserialized)).toBe(true);

    expect(deserialized!.length).toBe(2);
    expect(deserialized![0]).toEqual({ key: 'a', value: 2 });
    expect(deserialized![1]).toEqual({ key: 'b', value: 3 });
  });

  it('should handle invalid JSON input gracefully', () => {
    const invalidJson = '[{"key":a,"value":2},{"key":"b","value:3}]';
    const expected = 'Parsing of frequencies is invalid';

    expect(() => deserializeFrequencies(invalidJson)).toThrowError(expected);
  });
});
