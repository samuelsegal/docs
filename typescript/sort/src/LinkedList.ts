import { Sortable, Sorter } from './Sorter';

class LLNode {
	next: LLNode | null = null;
	constructor(public data: number) {}
}
/*
 *For demonstration purposes this class both extends Sorter giving it direct acces to sort function and implements so it can be used with SorterWrapper.
 */
export class LinkedList extends Sorter implements Sortable {
	compare(leftIndex: number, rightIndex: number): boolean {
		if (!this.head) {
			throw new Error('List Empty in Linked List');
		}
		return this.at(leftIndex).data > this.at(rightIndex).data;
	}
	swap(leftIndex: number, rightIndex: number): void {
		const lNode = this.at(leftIndex);
		const rNode = this.at(rightIndex);
		const tmp = lNode.data;
		lNode.data = rNode.data;
		rNode.data = tmp;
	}
	head: LLNode | null = null;
	add(data: number): void {
		const node = new LLNode(data);
		if (!this.head) {
			this.head = node;
			return;
		}
		let tail = this.head;
		while (tail.next) {
			tail = tail.next;
		}
		tail.next = node;
	}
	get length(): number {
		if (!this.head) {
			return 0;
		}
		let length = 1;
		let node = this.head;
		while (node.next) {
			length++;
			node = node.next;
		}
		return length;
	}
	at(index: number): LLNode {
		if (!this.head) {
			throw new Error('Index outta bounds');
		}
		let counter = 0;
		let node: LLNode | null = this.head;
		while (node) {
			if (counter === index) {
				return node;
			}
			counter++;
			node = node.next;
		}
		throw new Error('index outta bounds');
	}
	print(): void {
		if (!this.head) {
			throw new Error('No Head!!');
		}
		console.log('####Print');
		let node: null | LLNode = this.head;
		while (node) {
			console.log(node.data);
			node = node.next;
		}
	}
}
