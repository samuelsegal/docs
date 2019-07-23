/**
 * Write a function called minSubArrayLen which acceptts 2 parameters - an
 * array of positive integers and a positive integer.
 * This function should return the minimal length of a contiguous subarray
 * of which the sum is greater than or equal to the integer passed to the
 * function. If there isnt one return 0.
 */

(function() {
	const minSubArrayLen = (positiveInts: number[], minSum: number): number => {
		if (positiveInts === undefined || positiveInts.length === 0) {
			return 0;
		}

		let len = positiveInts.length;
		let minLen = len + 1;
		let i = 0;
		let j = 0;
		let sumWindow = 0;
		while (j <= len) {
			if (i < len && sumWindow < minSum) {
				sumWindow += positiveInts[i];
				i++;
			} else if (sumWindow >= minSum) {
				sumWindow -= positiveInts[j];
				minLen = i - j < minLen ? i - j : minLen;
				j++;
			} else {
				return minLen !== len + 1 ? minLen : 0;
			}
		}

		return minLen !== len + 1 ? minLen : 0;
	};
	console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
	console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
	console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 111));
	console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
})();
