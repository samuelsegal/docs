import { BinaryTreeNode } from '../problem3/BinaryTreeNode';
export class NodeCounter {
	countNodes = (node: BinaryTreeNode): number => {
		let counter = 0;
		const nodeCounter = (node: BinaryTreeNode): number => {
			counter++;
			if (node.left !== undefined) {
				nodeCounter(node.left);
			}
			if (node.right !== undefined) {
				nodeCounter(node.right);
			}
			return counter;
		};

		nodeCounter(node);
		return counter;
	};
}

const root = new BinaryTreeNode('1');
root.left = new BinaryTreeNode('L1');
root.left.left = new BinaryTreeNode('L1->L2');
root.left.left.right = new BinaryTreeNode('L1->L2->R1');
root.right = new BinaryTreeNode('R1');
root.right.right = new BinaryTreeNode('R1->R2');
root.right.left = new BinaryTreeNode('R1-L1');
root.right.right.right = new BinaryTreeNode('R1->R2->R3');
root.right.right.right.left = new BinaryTreeNode('R1->R2->R3->L1');
let count = new NodeCounter().countNodes(root);
console.log(`Node Count: ${count}`);
