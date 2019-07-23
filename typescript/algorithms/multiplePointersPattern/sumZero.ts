(function() {
	/**
	 * Return first pair of numbers that equal to 0
	 * @param sortedNumArr - sorted arry of numbers
	 */
	const sumZero = (sortedNumArr: number[]) => {
		let left = 0;
		let right = sortedNumArr.length - 1;
		while (left < right) {
			let sum = sortedNumArr[left] + sortedNumArr[right];
			if (sum === 0) {
				return [sortedNumArr[left], sortedNumArr[right]];
			} else if (sum > 0) {
				right--;
			} else {
				left++;
			}
		}
	};

	console.log(sumZero([-9, -7, -4, 3, 4, 10]));
	console.log(sumZero([-1, 0, 2]));
})();
