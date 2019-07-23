import { Sort } from './Sort';
import { Direction } from './Direction';
import { swapES2015 } from './swap';
/**
 * Quick Sort
 */
export class QuickSort implements Sort {
	constructor(public arr: any[]) {}
	sort(direction: Direction): void {
		this.arr = this.quickSort(this.arr, 0, this.arr.length - 1);
	}
	quickSort = (arr: any[], left: number, right: number): any[] => {
		if (left < right) {
			let pivotIndex = this.pivot(arr, left, right);
			this.quickSort(arr, left, pivotIndex - 1);
			this.quickSort(arr, pivotIndex + 1, right);
		}
		return arr;
	};
	pivot = (arr: any[], start: number, end: number): number => {
		let pivot = arr[start];
		let swapIndex = start;
		for (let i = start + 1; i < arr.length; i++) {
			if (pivot > arr[i]) {
				swapIndex++;
				swapES2015(arr, swapIndex, i);
			}
		}
		swapES2015(arr, start, swapIndex);
		return swapIndex;
	};
}
