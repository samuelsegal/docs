interface InternalNode {}
export class Node {
	constructor(public val: string) {}
	left: Node;
	right: Node;
}
var count = 0;
export class Storage {
	serialize(root: Node): string {
		if (root == null) {
			return '#';
		}
		let ret = '{' + root.val + '} {' + this.serialize(root.left) + '} {' + this.serialize(root.right) + '}';
		return ret;
	}
	getChunk = (str: string): string => {
		let ret = str.substring(str.indexOf('{') + 1, str.indexOf('}'));
		return ret;
	};
	split = (str: string): string => {
		if (str === undefined) {
			return;
		}
		let leftRight = [];

		let newStore = str.substring(str.indexOf('}') + 2, str.lastIndexOf('}') + 1);
		if (newStore[0] === '#') {
			return;
		}
		return newStore;
	};
	findLeftOpeningBracket(str: string) {
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
	findleftCloseBracket(str: string) {
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
				console.log(i);
				return i;
			}
		}
	}
	deSerialize(store: string): Node {
		console.log(`STORE: ${store}`);
		let node = new Node('');
		if (store === '') {
			return node;
		}
		let chunk = this.getChunk(store);
		if (chunk === '#') {
			return null;
		}
		node.val = chunk;
		let leftRight: string = this.split(store);
		if (leftRight === undefined) {
			return node;
		}
		let leftOpeningBracket = this.findLeftOpeningBracket(leftRight);
		let leftClosingBracket = this.findleftCloseBracket(leftRight);
		let leftChunk = leftRight.substring(leftOpeningBracket + 1, leftClosingBracket);
		let rightChunk = leftRight.substring(leftClosingBracket + 3, leftRight.length - 1);
		node.left = this.deSerialize(leftChunk);
		node.right = this.deSerialize(rightChunk);
		return node;
	}
}

let root = new Node('Root');
root.left = new Node('Left 1');
root.right = new Node('Right 1');
//root.left.right = new Node('Left 1 Right');
///root.left.left = new Node('Left 1 Left 2');
//root.left.left.left = new Node('Shazam');
root.right.left = new Node('Right 1 Left');
root.right.right = new Node('Right 1 Right');
root.right.left.right = new Node('SSSSShazam');
let storage = new Storage();
let serialized = storage.serialize(root);
console.log(serialized);
let deserialized = storage.deSerialize(serialized);
console.log(deserialized);
console.log(deserialized.right.left.right);
