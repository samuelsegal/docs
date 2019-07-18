import { swapES2015 } from './swap';
import { Direction, Comparator } from './Direction';
import { Sort } from './Sort';
/**
 * Insertion Sort:
 * Builds sort by gradually creating a larger left half.
 * Comlexities:
 * Time:
 *   Worst case : Quadratic : O(n * n)
 *   Avg.  case : O(n * n)
 *   Best case  : O(n)
 *
 */

export class InsertionSort implements Sort {
	constructor(public arr: any[]) {}
	sort = (direction: Direction): void => {
		const compare = direction === Direction.ASC ? Comparator.lessThen : Comparator.gtrThen;
		for (let i = 1; i < this.arr.length; i++) {
			if (compare(this.arr[i - 1], this.arr[i])) {
				//Notice the condition in this for loop
				//No need to go all the way back as once one lesser
				//is found all before are already sorted
				for (let j = i; j >= 0 && compare(this.arr[j - 1], this.arr[j]); j--) {
					swapES2015(this.arr, j - 1, j);
				}
			}
		}
	};
}
