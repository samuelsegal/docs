import { swapES2015 } from './swap';
export class BubbleSort {
	static sort = (arr: any[]) => {
		for (let i = arr.length; i > 0; i--) {
			let noSwaps = true;
			for (let j = 0; j < i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					noSwaps = false;
					swapES2015(arr, j, j + 1);
				}
			}
			if (noSwaps) {
				//if no swaps on last iteration than the array must be sorted.
				return arr;
			}
		}
		return arr;
	};
}
console.log(BubbleSort.sort([23, 2, 45, 3, 65, 4, 23, 4]));
