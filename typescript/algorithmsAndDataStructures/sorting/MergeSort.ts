import { Direction, Comparator } from './Direction';
import { Sort } from './Sort';
/**
 * MergeSort:
 *  - Combination of merging and sorting.
 *  - Exploits the fact that arrays of 0 or 1 element are always sorted
 *  -  Split up until we have all 2 pair arrays
 *  - Merge them  back to 1 array
 *  Complexities:
 *   Time:
 *     Best case: O(n log n)
 *     Average case: O(n log n)
 *     Worst case: O(n log n)
 *   Space: O(n)
 */
export class MergeSort implements Sort {
	private direction: Direction;
	constructor(public arr: any[]) {}
	sort = (direction: Direction): void => {
		this.direction = direction;
		this.arr = this.split(this.arr);
	};
	split = (arrayToSplit: any[]): any[] => {
		if (arrayToSplit.length <= 1) {
			return arrayToSplit;
		}
		let mid = Math.floor(arrayToSplit.length / 2);
		//recursivel split left side
		let left = this.split(arrayToSplit.slice(0, mid));
		//recursively split right side
		let right = this.split(arrayToSplit.slice(mid));
		return this.mergeSort(left, right);
	};
	/**
	 * Arrays must be presorted according to direction
	 */
	public counter: number = 0;
	mergeSort = (arr1: any[], arr2: any[]): any[] => {
		const compare = this.direction === Direction.ASC ? Comparator.lessThen : Comparator.gtrThen;
		const ret = [];
		for (let i1 = 0, i2 = 0; i1 < arr1.length || i2 < arr2.length; ) {
			if (compare(arr1[i1], arr2[i2]) || arr2[i2] === undefined) {
				ret.push(arr1[i1++]);
			} else {
				ret.push(arr2[i2++]);
			}
		}
		return ret;
	};
}
