import { BinaryTreeNode } from './BinaryTreeNode';
import { Comparable, Countable } from './util/Comparable';
/**
 * Binary Search Tree -
 * All child nodes to left are less than there parent.
 * All child nodes to the right are greater than there parent.
 * Complexities: Not Guaranteed 😬
 *   Time:
 *     Insertion: O(log n)
 *     Searching: O(log n)
 */
export class BinarySearchTree {
	root: BinaryTreeNode<Comparable & Countable>;
	constructor() {}
	insert = (val: Comparable & Countable): BinarySearchTree => {
		if (!this.root) {
			this.root = new BinaryTreeNode(val);
			return this;
		}
		let node = this.root;
		while (true) {
			if (val.gtrThen(node.val)) {
				if (node.right) {
					node = node.right;
				} else {
					node.right = new BinaryTreeNode(val);
					return this;
				}
			} else if (val.lessThen(node.val)) {
				if (node.left) {
					node = node.left;
				} else {
					node.left = new BinaryTreeNode(val);
					return this;
				}
			} else {
				console.log('Already exists, incrementing count');
				node.val.count++;
				return this;
			}
		}
	};
	/**
	 * find - finds the BinaryTreeNode that has same value as given val.
	 * @param val - Must implement Comparable
	 * @returns the found BinaryTreeNode
	 */
	find = (val: Comparable & Countable): BinaryTreeNode<Comparable & Countable> => {
		if (!this.root) {
			return undefined;
		}
		let node = this.root;
		while (true) {
			if (val.gtrThen(node.val)) {
				if (node.right) {
					node = node.right;
				} else {
					node.right = new BinaryTreeNode(val);
					return undefined;
				}
			} else if (val.lessThen(node.val)) {
				if (node.left) {
					node = node.left;
				} else {
					node.left = new BinaryTreeNode(val);
					return undefined;
				}
			} else {
				return node;
			}
		}
	};
}
