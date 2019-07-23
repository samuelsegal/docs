import { Sort } from './Sort';
import { Direction, Comparator } from './Direction';
import { swapES2015 } from './swap';
/**
 * Quick Sort:
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
		this.arr = this.quickSort(0, this.arr.length - 1);
	}
	quickSort = (left: number, right: number): any[] => {
		if (left < right) {
			let pivotIndex = this.pivot(left, right);
			this.quickSort(left, pivotIndex - 1);
			this.quickSort(pivotIndex + 1, right);
		}
		return this.arr;
	};
	pivot = (start: number, end: number): number => {
		let pivot = this.arr[start];
		let swapIndex = start;
		for (let i = start + 1; i < this.arr.length; i++) {
			if (this.compare(this.arr[i], pivot)) {
				swapIndex++;
				swapES2015(this.arr, swapIndex, i);
			}
		}
		swapES2015(this.arr, start, swapIndex);
		return swapIndex;
	};
}
// const quickSort = new QuickSort([1, 200, 3, 4, 5, 6, 1, 2, 3, 4, 5, 99, 6, 67, 555, 43, 4]);
// quickSort.sort(Direction.ASC);
// console.log(quickSort.arr);
