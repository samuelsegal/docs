import { BinaryTreeNode } from './BinaryTreeNode';

import { TreeNodeSerializer } from './TreeNodeSerializer';

let root = new BinaryTreeNode('Root');
root.left = new BinaryTreeNode('Left 1');
root.right = new BinaryTreeNode('Right 1');
root.left.right = new BinaryTreeNode('Left 1 Right');
root.left.left = new BinaryTreeNode('Left 1 Left 2');
root.left.left.left = new BinaryTreeNode('Shazam');
root.right.left = new BinaryTreeNode('Right 1 Left');
root.right.right = new BinaryTreeNode('Right 1 Right');
root.right.left.right = new BinaryTreeNode('SSSSShazam');
let storage = new TreeNodeSerializer();
let serialized = storage.serialize(root);
console.log(serialized);
let deserialized = storage.deSerialize(serialized);
console.log(deserialized);
console.log(deserialized.right.left.right);
deserialized.toString();
