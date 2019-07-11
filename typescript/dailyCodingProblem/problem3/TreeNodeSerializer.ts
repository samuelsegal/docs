import { BinaryTreeNode } from './BinaryTreeNode';
/**
 * Serializes and Desrializes a @BinaryTreeNode to a string
 * Binary Tree:
 *       0
 *     /   \
 *   1       2
 *  / \     / \
 * 11 12   21
 *    / \
 *      113
 * Serialized Binary Tree implementation
 * {0} {{1} {{11} {{113} {#} {#}} {#}} {{12} {#} {#}}} {{2} {{21} {#} {#}} {#}}
 * @argument val is of type string. For this current implementation val cannot = {,} or #. Will revisit if need be
 */
export class TreeNodeSerializer {
	/**
	 * Serializes a BinaryTree Node
	 * @param root Node to Serialize
	 */
	serialize(root: BinaryTreeNode): string {
		//store null nodes as #
		if (root == null) {
			return '#';
		}
		//recursivel store as: `{root.val} {serialize(root.left)} {serialize{root.right}}`
		let ret = `{${root.val}} {${this.serialize(root.left)}} {${this.serialize(root.right)}}`;
		return ret;
	}
	/**
	 * Deserializes a serialized string, that was serialized with @serialize
	 * @param store String to deserialize back to binary tree node
	 */
	deSerialize(store: string): BinaryTreeNode {
		let node = new BinaryTreeNode('');

		//Set this nodes val to the root chunk || return null if val = #
		let valChunk = this.getChunk(store);
		if (valChunk === '#') {
			return null;
		}
		node.val = valChunk;
		//get the left and right chunk
		let leftRight: string = this.split(store);
		if (leftRight === undefined) {
			return node;
		}

		//seperate left chunk from right chunk
		let leftOpeningBracket = this.findLeftOpeningBracket(leftRight);
		let leftClosingBracket = this.findleftCloseBracket(leftRight);
		let leftChunk = leftRight.substring(leftOpeningBracket + 1, leftClosingBracket);
		let rightChunk = leftRight.substring(leftClosingBracket + 3, leftRight.length - 1);

		//recursively set the left node to a new serialized node
		node.left = this.deSerialize(leftChunk);
		//recursively set the right node to a new serialized node
		node.right = this.deSerialize(rightChunk);
		return node;
	}
	private getChunk = (str: string): string => {
		let ret = str.substring(str.indexOf('{') + 1, str.indexOf('}'));
		return ret;
	};
	private split(str: string): string {
		if (str === undefined) {
			return;
		}
		let leftRight = [];

		let newStore = str.substring(str.indexOf('}') + 2, str.lastIndexOf('}') + 1);
		if (newStore[0] === '#') {
			return;
		}
		return newStore;
	}
	private findLeftOpeningBracket(str: string) {
		let left = 0;
		if (str === undefined) {
			return;
		}
		for (let i = 0; i < str.length; i++) {
			if (str[i] === '{') {
				left++;
			}
			if (left == 1) {
				return i;
			}
		}
	}
	private findleftCloseBracket(str: string) {
		let left = 0;
		if (str === undefined) {
			return;
		}
		for (let i = 0; i < str.length; i++) {
			if (str[i] === '{') {
				left++;
			}
			if (str[i] === '}') {
				left--;
			}
			if (left === 0) {
				return i;
			}
		}
	}
}
