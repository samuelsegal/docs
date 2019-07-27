export class BinaryTreeNode<T> {
	constructor(public val: T) {}
	left: BinaryTreeNode<T>;
	right: BinaryTreeNode<T>;
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
