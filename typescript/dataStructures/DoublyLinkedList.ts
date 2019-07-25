/**
 * Doubly Linked List
 */
export class DoublyLinkedList {
	head: Node;
	tail: Node;
	length: number;
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	/**
	 * push - adds new node to end of list
	 */
	push = (val: any) => {
		const node = new Node(val);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.length++;
		return this;
	};
	/**
	 * pop
	 */
	pop = () => {
		if (!this.head) {
			return undefined;
		}
		let toBeRemoved = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
		}
		this.length--;
		return toBeRemoved;
	};
	/**
	 * shift - removes head Node assiging the next to head. By nature all
	 * other nodes shift left 1.
	 */
	shift = (): Node => {
		if (this.length === 0) {
			return undefined;
		}
		const oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
		}

		this.length--;
		return oldHead;
	};
	/**
	 * unshift - adds new node to begining
	 */
	unshift = (val: any): DoublyLinkedList => {
		if (this.length === 0) {
			this.push(val);
		} else {
			const node = new Node(val);
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
			this.length++;
		}
		return this;
	};
	get = (index: number): Node => {
		if (index < 0 || index >= this.length) {
			return null;
		}
		const halfSize = Math.floor(this.length / 2);
		let node: Node;
		if (index < halfSize) {
			node = this.head;
			let count = 0;
			while (count !== index) {
				node = node.next;
				count++;
			}
		} else {
			node = this.tail;
			let count = this.length - 1;
			while (count !== index) {
				node = node.prev;
				count--;
			}
		}
		return node;
	};
	set = (index: number, val: any): boolean => {
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
		} else if (index === this.length) {
			this.push(val);
		} else {
			return false;
		}
		return true;
	};
	/**
	 * insert - insert a node at given index.And opf course the size of the list
	 * will increment by 1
	 */
	insert = (index: number, val: any): boolean => {
		//let node = new Node(val);
		if (index < 0 || index > this.length) {
			return false;
		}
		if (index === this.length) {
			this.push(val);
			return true;
		}
		if (index === 0) {
			this.unshift(val);
			return true;
		}
		let node = new Node(val);
		let prev = this.get(index - 1);
		let tmp = prev.next;
		prev.next = node;
		node.prev = prev;
		tmp.prev = node;
		node.next = tmp;
		this.length++;
		return true;
	};
	/**
	 * remove - removes node @ given index.
	 * @param index
	 */
	remove = (index: number): any => {
		if (index < 0 || index >= this.length) {
			return undefined;
		} else if (index === this.length - 1) {
			return this.pop();
		} else if (index === 0) {
			return this.shift();
		} else {
			let prev = this.get(index - 1);
			let removedNode = this.get(index);
			prev.next = removedNode.next;
			prev.next.prev = prev;
			this.length--;
			removedNode.prev = null;
			removedNode.next = null;
			return removedNode;
		}
	};
	/**
	 * traverse - accepts a function to be executed for each node from
	 * beginning to end
	 * @param func - function to execute on each node,
	 * @param arg - argument to pass to the func.
	 */
	traverse = (func: Function, arg?: any) => {
		if (!this.head) {
			return undefined;
		}
		let current = this.head;
		for (let i = 0; i < this.length; i++) {
			func(current.val, arg);
			current = current.next;
		}
	};
	/**
	 * print - prints all nodes with leading arrows
	 */
	print = () => {
		this.traverse((node, arg) => {
			arg.push('▶︎');
			console.log(`${arg.join('')}`, node);
		}, []);
	};
}

/**
 * Node for Doubly Linked List
 */
export class Node {
	next: Node;
	prev: Node;
	constructor(public val: any) {}
}
