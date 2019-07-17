import { es2015Swap } from './swap';
export class BubbleSort {
	static sort = (arr: any[]) => {
		for (let i = arr.length; i > 0; i--) {
			for (let j = 0; j < i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					es2015Swap(arr, j, j + 1);
				}
			}
		}
		return arr;
	};
}
console.log(BubbleSort.sort([23, 2, 45, 3, 65, 4, 23, 4]));
