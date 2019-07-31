import { swapES2015 } from '../algorithms/sorting/swap';
import { Comparable } from './util/Able';
import { AbstractNumber } from './util/AbstractNumber';
import { Task } from './util/Task';
/**
 * Binary Heap - Good for Priority Queues using extractMax
 * All child noes are lessthen its parent node.
 * Finding child nodes:
 *   For an index of an array n..., the left child is stored
 *   @ 2n + 1, the right child is at 2n + 2
 * Finding Parent Nodes:
 *   For child @ index n... its parent is @ Math.floor((n-1)/2)
 *
 * Complexities:
 *   Time:
 *     Insertion: O(log n)
 *     Removal:   O(log n)
 *     Search:    O(n)
 */

export class MaxBinaryHeap {
	constructor(public values: Comparable[]) {}
	isEmpty = (): boolean => {
		return this.values.length > 0;
	};
	insert = (value: Comparable): MaxBinaryHeap => {
		this.values.push(value);
		let index = this.values.length - 1;
		let parentIndex = Math.floor((index - 1) / 2);
		while (this.values[parentIndex] !== undefined && this.values[parentIndex].lessThen(this.values[index])) {
			swapES2015(this.values, parentIndex, index);
			index = parentIndex;
			parentIndex = Math.floor((index - 1) / 2);
		}
		return this;
	};
	extractMax = (): Comparable => {
		swapES2015(this.values, 0, this.values.length - 1);
		const max = this.values.pop();
		this.sinkDown();
		return max;
	};
	private getLeftChild = (index: number): Comparable => {
		return this.values[index * 2 + 1];
	};
	private getLeftChildIndex = (index: number) => {
		return index * 2 + 1;
	};
	private getRightChild = (index: number): Comparable => {
		return this.values[index * 2 + 2];
	};
	private getRightChildIndex = (index: number): number => {
		return index * 2 + 2;
	};
	print = (): void => {
		let printString = '';
		for (let i = 0, j = 0, k = 1; i < this.values.length; i++) {
			let val = {};
			if (this.values[i] instanceof AbstractNumber) {
				val = (<AbstractNumber>this.values[i]).num;
			} else if (this.values[i] instanceof Task) {
				val = (<Task>this.values[i]).val;
			}
			if (++j === k) {
				k = j * 2;
				printString += '\n';
			}
			printString = printString + ' ' + val;
		}
		console.log(printString);
		console.log('*******************************');
	};
	private sinkDown() {
		let index = 0;
		while (true) {
			let swap = false;
			let val = this.values[index];
			if (val === undefined) {
				break;
			}
			let left = this.getLeftChild(index);

			let right = this.getRightChild(index);
			if (left === undefined || right === undefined) {
				console.log('breaaaaaaaaaaaaaaaaaaaaaaaaaaaak');
				//break;
			}
			if (left !== undefined && val.lessThen(left)) {
				swap = true;
				if (right !== undefined && right.gtrThen(left) && val.lessThen(right)) {
					let rightIndex = this.getRightChildIndex(index);
					swapES2015(this.values, rightIndex, index);
					index = rightIndex;
				} else {
					let leftIndex = this.getLeftChildIndex(index);
					swapES2015(this.values, leftIndex, index);
					index = leftIndex;
				}
			} else if (right !== undefined && val.lessThen(right)) {
				swap = true;
				if (left !== undefined && left.gtrThen(right) && val.lessThen(left)) {
					let leftIndex = this.getLeftChildIndex(index);
					swapES2015(this.values, leftIndex, index);
					index = leftIndex;
				} else {
					let rightIndex = this.getRightChildIndex(index);
					swapES2015(this.values, rightIndex, index);
					index = rightIndex;
				}
			}
			if (!swap) {
				break;
			}
		}
	}
}
