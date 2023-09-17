import { Node } from './Node';

export function comparable(a: Node, b: Node): number {
  const result: number = b.getFrequency() - a.getFrequency();

  // Compare based on a frequency
  if (result !== 0) {
    return result;
  }

  // Else based on a letter
  return b.getLetter().charCodeAt(0) - a.getLetter().charCodeAt(0);
}
