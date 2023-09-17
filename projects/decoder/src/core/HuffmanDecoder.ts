import { PriorityQueue } from 'typescript-collections';
import { Node } from './utilities/node/Node';
import { Entry } from './utilities/interface/Entry.interface';
import { comparable } from './utilities/node/comparable';

export class HuffmanDecoder {
  #decodingTree: Node | undefined;
  #decodedText: string;

  constructor(encodedText: string | null, decodingTable: Entry[] | null) {
    this.#decodingTree = this.#buildEncodingTree(decodingTable!);
    this.#decodedText = this.#decodeText(encodedText!, this.#decodingTree!);
  }

  getDecodedText(): string {
    return this.#decodedText;
  }

  #buildEncodingTree(table: Entry[]) {
    if (table === undefined) return undefined;

    const frequencyQueue: PriorityQueue<Node> = new PriorityQueue<Node>(
      comparable
    );
    let root: Node | undefined = undefined;

    table.forEach(entry => {
      const letter: string | undefined = entry.key;
      const totalFrequencies: number | undefined = entry.value;

      // Insert the letters using their frequencies from smallest to largest
      frequencyQueue.enqueue(
        new Node(undefined, undefined, totalFrequencies!, letter!)
      );
    });

    // Start building the try from button-up
    while (frequencyQueue.size() > 1) {
      const leftNode: Node | undefined = frequencyQueue.dequeue();
      const rightNode: Node | undefined = frequencyQueue.dequeue();

      const parentFrequency: number =
        leftNode!.getFrequency() + rightNode!.getFrequency();

      frequencyQueue.add(new Node(leftNode, rightNode, parentFrequency, '\0'));
    }

    // Catch the root
    root = frequencyQueue.dequeue();

    return root;
  }

  #decodeText(encodedText: string, tree: Node): string {
    if (encodedText.length === 1) {
      return tree.getLetter();
    }

    let decodedText = '';

    let root: Node = tree;

    const textLength: number = encodedText.length;

    let i = 0;

    while (i < textLength) {
      while (!root.isLeaf()) {
        const bit: string = encodedText.charAt(i);

        if (bit === '0') {
          root = root.getLeftNode()!;
        } else if (bit === '1') {
          root = root.getRightNode()!;
        } else {
          throw new Error('Invalid bit: ' + bit);
        }

        i++;
      }

      decodedText += root.getLetter();

      // Back to the top of the tree aging
      root = tree;
    }
    return decodedText;
  }
}
