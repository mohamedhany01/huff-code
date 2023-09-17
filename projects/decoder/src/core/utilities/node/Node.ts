export class Node {
  #leftNode: Node | undefined;
  #rightNode: Node | undefined;
  #frequency: number;
  #letter: string;

  constructor(
    leftNode: Node | undefined,
    rightNode: Node | undefined,
    frequency: number,
    letter: string
  ) {
    this.#leftNode = leftNode;
    this.#rightNode = rightNode;
    this.#frequency = frequency;
    this.#letter = letter;
  }

  getLeftNode(): Node | undefined {
    return this.#leftNode;
  }

  getRightNode(): Node | undefined {
    return this.#rightNode;
  }

  getFrequency(): number {
    return this.#frequency;
  }

  getLetter(): string {
    return this.#letter;
  }

  isLeaf(): boolean {
    return this.#leftNode === undefined && this.#rightNode === undefined;
  }
}
