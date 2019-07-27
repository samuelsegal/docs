import { DoublyLinkedList } from './DoublyLinkedList';
/**
 * Stack - LIFO - Like a stack of papers.
 */
export class Stack {
	private dll = new DoublyLinkedList();
	push = (val: any): number => {
		return this.dll.push(val).length;
	};
	pop = (): any => {
		return this.dll.pop().val;
	};
}
