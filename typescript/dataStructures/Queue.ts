import { DoublyLinkedList } from './DoublyLinkedList';
/**
 * Queue - FIFO - Like a line. In 1 side out the other.
 */
export class Queue {
	private dll = new DoublyLinkedList();
	enqueue = (val: any): number => {
		return this.dll.unshift(val).length;
	};
	dequeue = () => {
		return this.dll.pop().val;
	};
}
