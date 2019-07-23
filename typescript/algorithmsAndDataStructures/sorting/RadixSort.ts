import { Sort } from './Sort';
import { Direction } from './Direction';
/**
 * Radix Sort for Base 10: Creates Buckets based on Base, so for base 10 there are 9
 * buckets. Then it goes through the number backwards and places each number
 * into its bucket, when there is no number to the left the number goes to 0
 * bucket. so for (23, 309, 5)
 * (Step...): # -> Bucket
 * step 1: 309 -> 9, 23 -> 3, 5 -> 5
 * step 2: 309 -> 0, 23 -> 2, 5 -> 0
 * step 3: 309 -> 3, 23 -> 0, 5 -> 0
 * Complexities:
 *   Time:
 *     Worst case: O(nk) - Note: k is the length of digits
 *     Avg case:   O(nk)
 *     Best case:  O(nk)
 *   Space:        O(n + k)
 */
export class RadixSort implements Sort {
	constructor(public arr: number[]) {}
	sort(direction: Direction): void {
		const digiCount = this.mostDigits();
		const bucketArr = this.createBuckets(9);
		const reSort = direction === Direction.ASC ? this.reSortAsc : this.reSortDesc;
		for (let i = 0; i < digiCount; i++) {
			for (let j = 0; j < this.arr.length; j++) {
				const num = this.getDigit(this.arr[j], i);
				bucketArr[num].push(this.arr[j]);
			}
			reSort(bucketArr);
		}
	}
	private reSortDesc = (bucketArr: Bucket[]): void => {
		this.arr = [];
		for (let i = bucketArr.length - 1; i >= 0; i--) {
			if (bucketArr[i].numArr.length > 0) {
				this.arr = this.arr.concat(bucketArr[i].numArr);
				bucketArr[i].numArr = [];
			}
		}
	};
	private reSortAsc = (bucketArr: Bucket[]): void => {
		this.arr = [];
		for (let i = 0; i < bucketArr.length; i++) {
			if (bucketArr[i].numArr.length > 0) {
				this.arr = this.arr.concat(bucketArr[i].numArr);
				bucketArr[i].numArr = [];
			}
		}
	};
	private createBuckets = (num: number): Bucket[] => {
		const bucketArr: Bucket[] = [];
		for (let i = 0; i <= num; i++) {
			bucketArr[i] = new Bucket(i);
		}
		return bucketArr;
	};
	private getDigit = (num: number, index: number): number => {
		return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
	};
	/**
	 * digitCount and charCount do the same thing.
	 * Am leaving both for reference.
	 */
	private digitCount = (num: number): number => {
		if (0) {
			return 1;
		}
		return Math.floor(Math.log10(num)) + 1;
	};
	/**
	 * digitCount and charCount do the same thing.
	 * Am leaving both for reference.
	 */
	private charCount = (num: number) => {
		return num.toString().length;
	};
	private mostDigits = () => {
		let most = 0;
		for (let i of this.arr) {
			const digiCount = this.charCount(i);
			if (digiCount > most) {
				most = digiCount;
			}
		}
		return most;
	};
}
/**
 * THis class is actually overkilll, we could have simply used an array.
 * However, for me at the time of implementation it made it easier to think
 * about, probably due to OOP background. And now am to lazy to reimplement.
 * We could have used following instead:
 * let digitBuckets = Array.from({length: 10}, ()=>[]);
 */
class Bucket {
	numArr: number[] = [];
	constructor(public num: number) {}
	push = (num: number): void => {
		this.numArr.push(num);
	};
}
// console.log(new RadixSort([]).getDigit(2345, 3));
// console.log(new RadixSort([]).charCount(2345));
// console.log(new RadixSort([]).digitCount(2345));
// console.log(new RadixSort([1, 2, 33, 123452]).mostDigits());
// const sort = new RadixSort([199, 5, 33, 123452, 4, 3, 2, 88]);
// sort.sort(Direction.ASC);
// console.log(sort.arr);
