import { swapES2015 } from './swap';
import { Direction, Comparator } from './Direction';
import { Sort } from './Sort';
/**
 * Bubble Sort:
 * Complexities:
 *   Time:
 *     Worst case: O(n * n)
 *     Avg. case: O(n * n)
 *     Best Case: O(n)
 *   Space: O(1)
 */
export interface BubbleSort extends Sort {}
export class BubbleSort implements BubbleSort {
	constructor(public arr: any[]) {}

	sort = (direction: Direction): void => {
		const outerLoop = [];

		const compare = direction === Direction.ASC ? Comparator.lessThen : Comparator.gtrThen;
		for (let i = this.arr.length; i > 0; i--) {
			let noSwaps = true;
			for (let j = 0; j < i - 1; j++) {
				if (compare(this.arr[j + 1], this.arr[j])) {
					noSwaps = false;
					swapES2015(this.arr, j + 1, j);
				}
			}
			if (noSwaps) {
				//if no swaps on last iteration than the array must
				//already be sorted.
				break;
			}
		}
	};
}
