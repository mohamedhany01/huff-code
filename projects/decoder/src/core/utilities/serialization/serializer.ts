import { Entry } from '../interface/Entry.interface';

export function serializeFrequencies(frequencies: Entry[]): string {
  return JSON.stringify(frequencies);
}

export function deserializeFrequencies(
  frequencies: string | null
): Entry[] | null {
  if (frequencies === null || frequencies === undefined) {
    return null;
  }

  try {
    return JSON.parse(frequencies);
  } catch (error) {
    throw new Error('Parsing of frequencies is invalid');
  }
}
