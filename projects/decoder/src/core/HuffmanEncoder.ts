import { Dictionary, PriorityQueue } from 'typescript-collections';
import { Node } from './utilities/node/Node';
import { comparable } from './utilities/node/comparable';
import { Entry } from './utilities/interface/Entry.interface';
import { StringManager } from './utilities/io/helper';

export class HuffmanEncoder {
  #input: string;
  #root: Node | null;
  #encodedText!: string | null;
  #frequencies!: Entry[] | null;
  #FrequencyTable!: Dictionary<string, number> | null;

  constructor(text: string) {
    const helper = new StringManager();

    this.#input = helper.clean(text);
    this.#FrequencyTable = this.#builtFrequencyTable(this.#input);
    this.#root = this.#buildEncodedTree(this.#FrequencyTable);
    this.#encodedText = this.#getEncodedText(
      this.#input,
      this.#buildCompressedMap(this.#root)
    );
    this.#frequencies = this.#initializeFrequencies(this.#FrequencyTable);
  }

  getEncodedText(): string | null {
    return this.#encodedText;
  }

  getFrequencies(): Entry[] | null {
    return this.#frequencies;
  }

  #builtFrequencyTable(text: string): Dictionary<string, number> | null {
    const helper = new StringManager();

    if (helper.isEmpty(text)) return null;

    const frequencyTable: Dictionary<string, number> = new Dictionary<
      string,
      number
    >();

    for (let i = 0; i < text.length; i++) {
      const character: string = text.charAt(i);
      if (frequencyTable.containsKey(character)) {
        const frequency = frequencyTable.getValue(text.charAt(i));
        const oldFrequency: number = frequency ? frequency + 1 : 0;
        frequencyTable.setValue(character, oldFrequency);
      } else {
        frequencyTable.setValue(character, 1);
      }
    }

    return frequencyTable;
  }

  // Initialize to serialize it later
  #initializeFrequencies(
    frequencyTable: Dictionary<string, number> | null
  ): Entry[] | null {
    if (frequencyTable === null) return null;

    const frequencies: Entry[] = [];

    frequencyTable.forEach((key: string, value: number) => {
      const freqEntry: Entry = {
        key: key,
        value: value,
      };

      frequencies.push(freqEntry);
    });

    return frequencies;
  }

  #buildEncodedTree(
    frequencyTable: Dictionary<string, number> | null
  ): Node | null {
    if (!frequencyTable) return null;

    const frequencyQueue: PriorityQueue<Node> = new PriorityQueue<Node>(
      comparable
    );
    let root: Node | null = null;

    frequencyTable.forEach((character: string, frequency: number) => {
      const letter: string = character;
      const totalFrequencies: number = frequency;

      // Insert the letters using their frequencies from smallest to largest
      frequencyQueue.enqueue(
        new Node(undefined, undefined, totalFrequencies, letter)
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
    const dequeuedRoot = frequencyQueue.dequeue();
    root = dequeuedRoot === undefined ? null : dequeuedRoot;

    return root;
  }

  #buildCompressedMap(tree: Node | null): Dictionary<string, string> | null {
    if (tree == null) return null;

    const compressedMap: Dictionary<string, string> = new Dictionary<
      string,
      string
    >();
    const encodedLetter = '';

    this.#buildCompressedMapUtil(tree, compressedMap, encodedLetter);

    return compressedMap;
  }

  #buildCompressedMapUtil(
    node: Node,
    compressedMap: Dictionary<string, string>,
    encodedLetter: string
  ): void {
    if (node.isLeaf()) {
      compressedMap.setValue(node.getLetter(), encodedLetter);
    } else {
      this.#buildCompressedMapUtil(
        node.getLeftNode()!,
        compressedMap,
        encodedLetter + '0'
      );
      this.#buildCompressedMapUtil(
        node.getRightNode()!,
        compressedMap,
        encodedLetter + '1'
      );
    }
  }

  #getEncodedText(
    text: string | null,
    compressedMap: Dictionary<string, string> | null
  ): string | null {
    if (text === null || compressedMap === null) return null;

    if (text.length === 1) return '0';

    let encodedText = '';

    text.split('').forEach(character => {
      encodedText += compressedMap.getValue(character);
    });

    return encodedText;
  }
}
