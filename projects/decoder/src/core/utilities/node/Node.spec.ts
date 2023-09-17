import { Node } from './Node';

describe('Node module', () => {
  it('should initialize properties correctly in the constructor', () => {
    const leftNode = new Node(undefined, undefined, 2, 'a');
    const rightNode = new Node(undefined, undefined, 3, 'b');

    const node = new Node(leftNode, rightNode, 5, 'c');

    expect(node.getLeftNode()).toBe(leftNode);
    expect(node.getRightNode()).toBe(rightNode);
    expect(node.getFrequency()).toBe(5);
    expect(node.getLetter()).toBe('c');
  });

  it('should correctly determine leaf nodes', () => {
    const leafNode = new Node(undefined, undefined, 1, 'a');
    const nonLeafNode = new Node(leafNode, undefined, 2, 'b');

    expect(leafNode.isLeaf()).toBe(true);
    expect(nonLeafNode.isLeaf()).toBe(false);
  });

  it('should initialize properties as undefined when left and right nodes are undefined', () => {
    const node = new Node(undefined, undefined, 5, 'c');

    expect(node.getLeftNode()).toBeUndefined();
    expect(node.getRightNode()).toBeUndefined();
    expect(node.getFrequency()).toBe(5);
    expect(node.getLetter()).toBe('c');
  });

  it('should correctly determine leaf nodes with undefined left and right nodes', () => {
    const leafNode = new Node(undefined, undefined, 1, 'a');

    expect(leafNode.isLeaf()).toBe(true);
  });
});
