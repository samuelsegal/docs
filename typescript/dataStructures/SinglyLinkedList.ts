/**
 * SinglyLinkedList
 */
export class SinglyLinkedList {
	head: Node;
	tail: Node;
	length: number;
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	/**
	 * push - adds a node with givern val to the end of list.
	 * @param val - value for new node
	 */
	push(val: any): SinglyLinkedList {
		const node = new Node(val);
		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
		return this;
	}
	/**
	 * pop = removes last node, by singly linked lists` nature this is bad for
	 * performance.
	 */
	pop = (): Node => {
		if (!this.head) {
			return undefined;
		}
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	};
	/**
	 * shift - removes head node assigning next node to head node
	 */
	shift = () => {
		if (!this.head) {
			return undefined;
		}
		let headToRemove = this.head;
		this.head = headToRemove.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return headToRemove;
	};
	/**
	 * unshift - adds new node to beginning of list. good for performance
	 * @param val - value for new node
	 */
	unshift = (val: any): SinglyLinkedList => {
		const node = new Node(val);
		if (!this.head) {
			this.tail = node;
			this.head = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.length++;
		return this;
	};
	/**
	 * get - retieves node at given index, 0 Based.
	 * @param index
	 */
	get = (index: number): Node => {
		let node = this.head;
		let count = 0;
		if (index < 0 || index >= this.length) {
			return null;
		}
		while (count !== index) {
			node = node.next;
			count++;
		}
		return node;
	};
	/**
	 * set - updates the node at given index and returns true. If there is no
	 * node previous node @ given index and index !== length + 1, no node is
	 * set and false is returned
	 */
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
		node.next = tmp;
		this.length++;
		return true;
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
		while (current.next) {
			func(current.val, arg);
			current = current.next;
			if (!current.next) {
				func(current.val, arg);
			}
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
 * Node for Singly Linked List
 */
export class Node {
	next: Node;
	constructor(public val: any, next?: Node) {
		if (next) {
			this.next = next;
		}
	}
}
const list = new SinglyLinkedList();
const node = new Node('Hi');
const node2 = new Node('There');
const node3 = new Node('Rabbit');
list.push('hi');
list.push('there');
list.push('rabbit');
list.push('ouhounb');
list.push('sdfg');
list.print();
list.pop();
list.print();
list.shift();
list.print();
list.push('END');
list.push('END');
list.push('END');

let ret = list.get(2);

ret = new Node('Hoobaly hooo');
console.log('2nd index: ', list.get(2), ret);
list.set(2, 'Holy Scanolly');
console.log(`2nd index: `, list.get(2));
list.set(8, node);
list.set(6, node.val);
list.print();
list.insert(5, 'FIIIIVE');
list.print();
