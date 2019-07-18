import { fork } from 'child_process';
import { swapES2015 } from './swap';

/**
 * Selection Sort. Loops through and pushes the winner of comparison to bottom.
 * Time Complexity : O(n * n)
 * Space: O(1)
 */
export class SelectionSort {
	static face = '🤓';
	static mean = '⏩⏪';
	static sortOptimal = (arr: any[]): any[] => {
		for (let i = 0; i < arr.length; i++) {
			let min = i;
			const faceArr = [];
			const meanArr = [];
			for (let j = i; j < arr.length; j++) {
				faceArr.push(SelectionSort.face);
				if (arr[j] < arr[min] && j !== min) {
					min = j;
				}
			}
			if (min !== i) {
				meanArr.push(SelectionSort.mean);
				swapES2015(arr, i, min);
			}
			console.log(faceArr.join(''), meanArr);
		}
		return arr;
	};
	static sortNonOptimal = (arr: any[]): any[] => {
		for (let i = 0; i < arr.length; i++) {
			let min = i;
			const faceArr = [];
			const meanArr = [];
			for (let j = i; j < arr.length; j++) {
				faceArr.push(SelectionSort.face);
				if (arr[j] < arr[min]) {
					//This is not necesssary as we only
					//1 swap per sweep is needed like in sortOptimal
					meanArr.push(SelectionSort.mean);
					swapES2015(arr, i, j);
				}
			}
			console.log(faceArr.join(''), meanArr);
		}
		return arr;
	};
	static sortSuperNaive = (arr: any[]): any[] => {
		for (let i = 0; i < arr.length; i++) {
			let min = i;
			const faceArr = [];
			const meanArr = [];
			for (let j = 0; j < arr.length; j++) {
				faceArr.push(SelectionSort.face);
				if (arr[j] < arr[min]) {
					//This is not necesssary as we only
					//1 swap per sweep is needed like in sortOptimal
					meanArr.push(SelectionSort.mean);
					swapES2015(arr, i, j);
				}
			}
			console.log(faceArr.join(''), meanArr);
		}
		return arr;
	};
}

console.log(SelectionSort.sortSuperNaive([0, 2, 3, 23, 55, 1, 44, 92, 36, -22, 38, 102, 2100, -40]));
console.log(SelectionSort.sortNonOptimal([0, 2, 3, 23, 55, 1, 44, 92, 36, -22, 38, 102, 2100, -40]));
console.log(SelectionSort.sortOptimal([0, 2, 3, 23, 55, 1, 44, 92, 36, -22, 38, 102, 2100, -40]));
