import { BinarySearchTree } from './BinarySearchTree';
import { AbstractNumber } from './util/AbstractNumber';
const tree = new BinarySearchTree();
const num = new AbstractNumber(10);
tree.insert(num);
tree.insert(new AbstractNumber(6));
tree.insert(new AbstractNumber(15));
tree.insert(new AbstractNumber(3));
tree.insert(new AbstractNumber(8));
tree.insert(new AbstractNumber(20));
console.log(tree.find(new AbstractNumber(20)));
//console.log(tree.root);
console.log(tree.find(new AbstractNumber(0)));
// console.log(tree.find(new 2)));
console.log('############');
let test = '';
console.log(
	tree.breadthFirstTraverse(node => {
		test += '+';
		return node.num + test;
	})
);
// console.log(tree.depthFirstPreOrder());
// console.log(tree.depthFirstPostOrder());
// console.log(tree.depthFirstInOrder());
