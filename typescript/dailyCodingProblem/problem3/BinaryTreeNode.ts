import { TreeNodeSerializer } from './TreeNodeSerializer';
export class BinaryTreeNode {
	constructor(public val: string) {}
	left: BinaryTreeNode;
	right: BinaryTreeNode;
	toString() {
		if (this.val) {
			console.log(`val: ${this.val}`);
		}
		if (this.left) {
			this.left.toString();
		}
		if (this.right) {
			this.right.toString();
		}
	}
}

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
