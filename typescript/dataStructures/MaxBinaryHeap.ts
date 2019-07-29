import { swapES2015 } from '../algorithms/sorting/swap';
import { log } from 'util';
/**
 * Binary Heap -
 * All child noes are lessthen its parent node.
 * Finding child nodes:
 *   For an index of an array n..., the left child is stored
 *   @ 2n + 1, the right child is at 2n + 2
 * Finding Parent Nodes:
 *   For child @ index n... its parent is @ Math.floor((n-1)/2)
 *
 */

export class MaxBinaryHeap {
	constructor(public values: any[]) {}
	insert = (value: any): MaxBinaryHeap => {
		this.values.push(value);
		let index = this.values.length - 1;
		let parentIndex = Math.floor((index - 1) / 2);
		while (this.values[parentIndex] < this.values[index]) {
			swapES2015(this.values, parentIndex, index);
			index = parentIndex;
			parentIndex = Math.floor((index - 1) / 2);
		}
		return this;
	};
	extractMax = (): any => {
		swapES2015(this.values, 0, this.values.length - 1);
		const max = this.values.pop();
		this.sinkDown();
		return max;
	};
	getLeftChild = (index: number): any => {
		return this.values[index * 2 + 1];
	};
	getLeftChildIndex = (index: number) => {
		return index * 2 + 1;
	};
	getRightChild = (index: number): any => {
		return this.values[index * 2 + 2];
	};
	getRightChildIndex = (index: number): number => {
		return index * 2 + 2;
	};
	print = (): void => {
		let printString = '';
		for (let i = 0, j = 0, k = 1; i < this.values.length; i++) {
			if (++j === k) {
				k = j * 2;
				printString += '\n';
			}
			printString = printString + ' ' + this.values[i];
		}
		console.log(printString);
	};
	sinkDown() {
		let index = 0;
		while (true) {
			let swap = false;
			let val = this.values[index];
			let left = this.getLeftChild(index);

			let right = this.getRightChild(index);
			if (left === undefined || right === undefined) {
				break;
			}
			//const biggest = left < right ? right : left;
			if (val < left) {
				swap = true;
				if (right > left && val < right) {
					let rightIndex = this.getRightChildIndex(index);
					swapES2015(this.values, rightIndex, index);
					index = rightIndex;
				} else {
					let leftIndex = this.getLeftChildIndex(index);
					swapES2015(this.values, leftIndex, index);
					index = leftIndex;
				}
			} else if (val < right) {
				swap = true;
				if (left > right && val < left) {
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
