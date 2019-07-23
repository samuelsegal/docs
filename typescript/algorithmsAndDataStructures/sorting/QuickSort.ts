import { Sort } from './Sort';
import { Direction, Comparator } from './Direction';
import { swapES2015 } from './swap';
import { quickSortData } from './Util';
/**
 * Quick Sort
 * Complexities:
 *   Time:
 *     Best case:  O(n log n)
 *     Avg case:   O(n log n)
 *     Worst case: O(n * n)
 *   Space:        O(log n)
 */
export class QuickSort implements Sort {
	compare: Function;
	constructor(public arr: any[]) {}
	sort(direction: Direction): void {
		this.compare = direction === Direction.ASC ? Comparator.lessThen : Comparator.gtrThen;
		this.arr = this.quickSort(this.arr, 0, this.arr.length - 1);
	}
	quickSort = (arr: any[], left: number, right: number): any[] => {
		console.log(arr);
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
			console.log(pivot);
			if (this.compare(arr[i], pivot)) {
				swapIndex++;
				swapES2015(arr, swapIndex, i);
			}
		}
		swapES2015(arr, start, swapIndex);
		return swapIndex;
	};
}
// const quickSort = new QuickSort(quickSortData);
// quickSort.sort(Direction.ASC);
// console.log(quickSort.arr);
