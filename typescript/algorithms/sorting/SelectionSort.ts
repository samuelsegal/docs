import { fork } from 'child_process';
import { swapES2015 } from './swap';
import { Sort } from './Sort';
import { Direction, Comparator } from './Direction';

/**
 * Selection Sort. Loops through and pushes the winner of comparison to bottom.
 * Time Complexity : O(n * n)
 * Space: O(1)
 */
export class SelectionSort implements Sort {
	sort = (direction: Direction): void => {
		this.sortOptimal(direction);
	};
	constructor(public arr: any[]) {}
	sortOptimal = (direction: Direction): any[] => {
		const compare = direction === Direction.ASC ? Comparator.lessThen : Comparator.gtrThen;
		for (let i = 0; i < this.arr.length; i++) {
			let min = i;
			for (let j = i; j < this.arr.length; j++) {
				if (compare(this.arr[j], this.arr[min]) && j !== min) {
					min = j;
				}
			}
			if (min !== i) {
				swapES2015(this.arr, i, min);
			}
		}
		return this.arr;
	};
	sortNonOptimal = (arr: any[]): any[] => {
		for (let i = 0; i < arr.length; i++) {
			let min = i;
			const faceArr = [];
			const meanArr = [];
			for (let j = i; j < arr.length; j++) {
				if (arr[j] < arr[min]) {
					//This is not necesssary as we only
					//1 swap per sweep is needed like in sortOptimal
					swapES2015(arr, i, j);
				}
			}
			console.log(faceArr.join(''), meanArr);
		}
		return arr;
	};
	sortSuperNaive = (arr: any[]): any[] => {
		for (let i = 0; i < arr.length; i++) {
			let min = i;
			for (let j = 0; j < arr.length; j++) {
				if (arr[j] < arr[min]) {
					//This is not necesssary as we only
					//1 swap per sweep is needed like in sortOptimal
					swapES2015(arr, i, j);
				}
			}
		}
		return arr;
	};
}
