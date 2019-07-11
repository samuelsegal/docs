import { BinaryTreeNode } from './BinaryTreeNode';

import { TreeNodeSerializer } from './TreeNodeSerializer';

let root = new BinaryTreeNode('0');
root.left = new BinaryTreeNode('1');
root.right = new BinaryTreeNode('2');
root.left.right = new BinaryTreeNode('12');
root.left.left = new BinaryTreeNode('11');
root.left.left.left = new BinaryTreeNode('113');
root.right.left = new BinaryTreeNode('21');
// root.right.right = new BinaryTreeNode('Right 1 Right');
// root.right.left.right = new BinaryTreeNode('SSSSShazam');
let storage = new TreeNodeSerializer();
let serialized = storage.serialize(root);
console.log(serialized);
let deserialized = storage.deSerialize(serialized);
console.log(deserialized);
console.log(deserialized.right.left.right);
deserialized.toString();
