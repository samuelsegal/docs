/**
 * Singly Linked List:
 */

export class Node {
	next: Node;
	constructor(public val: any, next?: Node) {
		if (next) {
			this.next = next;
		}
	}
}
export class SinglyLinkedList {
	head: Node;
	tail: Node;
	length: number;
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val: any) {
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
}
const list = new SinglyLinkedList();
const node = new Node('Hi');
const node2 = new Node('There');
const node3 = new Node('Rabbit');
list.push(node);
list.push(node2);
list.push(node3);
console.dir(list);
