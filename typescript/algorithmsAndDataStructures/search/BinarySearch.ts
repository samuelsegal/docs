/**
 * BinarySearch divide and conquor
 */
export class BinarySearch {
	static search = (sortedArr: any[], val: any): number => {
		let left = 0;
		let right = sortedArr.length - 1;
		let middle = Math.floor((left + right) / 2);

		while (left < right) {
			console.log(`left: ${left} right: ${right} mid: ${middle}`);
			if (sortedArr[left] === val) {
				return left;
			} else if (sortedArr[right] === val) {
				return right;
			} else if (sortedArr[middle] === val) {
				return middle;
			} else {
				if (val > sortedArr[middle]) {
					left = middle + 1;
				} else {
					right = middle - 1;
				}
				middle = Math.floor((left + right) / 2);
			}
		}
		return -1;
	};
}
console.log(BinarySearch.search([1, 2, 3, 4, 5, 6, 7, 10, 12, 13, 14, 14, 15], 12));
