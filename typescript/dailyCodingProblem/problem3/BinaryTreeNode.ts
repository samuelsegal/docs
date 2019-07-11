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
