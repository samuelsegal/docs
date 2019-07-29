import { BinaryTreeNode } from './BinaryTreeNode';
import { Comparable, Countable } from './util/Able';
import { AbstractNumber } from './util/AbstractNumber';
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
					return undefined;
				}
			} else if (val.lessThen(node.val)) {
				if (node.left) {
					node = node.left;
				} else {
					return undefined;
				}
			} else {
				return node;
			}
		}
	};
	/**
	 * breadtFirstTraverse - traverses tree horizontally. for each node the
	 * given function is applied to that node and its result is pushed to an
	 * array that is returned
	 */
	breadthFirstTraverse = (func: Function): any[] => {
		let node = this.root;
		const data = [];
		const queue = [];
		queue.push(node);
		while (queue.length) {
			node = queue.shift();
			data.push(func(node.val));
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}
		return data;
	};
	depthFirstPreOrder = (): any[] => {
		const vals = [];
		const traverseHelper = (node: BinaryTreeNode<Comparable>) => {
			vals.push((<AbstractNumber>node.val).num);
			if (node.left) {
				traverseHelper(node.left);
			}
			if (node.right) {
				traverseHelper(node.right);
			}
		};
		traverseHelper(this.root);
		return vals;
	};
	depthFirstPostOrder = (): any[] => {
		const vals = [];
		const traverseHelper = (node: BinaryTreeNode<Comparable>) => {
			if (node.left) {
				traverseHelper(node.left);
			}
			if (node.right) {
				traverseHelper(node.right);
			}
			vals.push((<AbstractNumber>node.val).num);
		};
		traverseHelper(this.root);
		return vals;
	};
	depthFirstInOrder = (): any[] => {
		const vals = [];
		const traverseHelper = (node: BinaryTreeNode<Comparable>) => {
			if (node.left) {
				traverseHelper(node.left);
			}
			vals.push((<AbstractNumber>node.val).num);
			if (node.right) {
				traverseHelper(node.right);
			}
		};
		traverseHelper(this.root);
		return vals;
	};
}
