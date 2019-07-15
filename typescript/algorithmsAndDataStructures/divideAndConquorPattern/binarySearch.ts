(function() {
	/**
	 * Simply keep taking halves narrowing down to what we look for.
	 * If never found return -1
	 * Time Complexity: Log(n)
	 * @param sortedArr
	 * @param val
	 */
	const binarySearch = (sortedArr: number[], val: number): number => {
		let min = 0;
		let max = sortedArr.length - 1;
		while (min <= max) {
			let middle = Math.floor((min + max) / 2);
			let cursor = sortedArr[middle];
			if (cursor > val) {
				max = middle - 1;
			} else if (cursor < val) {
				min = middle + 1;
			} else {
				return middle;
			}
		}
		return -1;
	};
	let sortedArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	let searchCriteria = 6;
	console.log(`Index of ${sortedArr} for ${searchCriteria} is ${binarySearch(sortedArr, searchCriteria)}`);
})();
