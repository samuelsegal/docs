/**
 * Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average, THere may be more than one pair that matches the average target
 * Average = Sum / Count
 */
(function() {
	/**
	 * Uses multi pointer. First we find index of the top possibility.
	 * Then we use multi pointer to compare top to bottom
	 * checking each average and moving towards middle accordingly.
	 * If target is never met, target must not exist. 🏹
	 * @param sortedArr
	 * @param targetAverage
	 */
	const averagePair = (sortedArr: number[], targetAverage: number): boolean => {
		let len = sortedArr.length;
		let topSum = targetAverage * 2;
		console.log(`top: ${topSum}`);

		let topIndex = 0;
		for (let i = len - 1; i > 0; i--) {
			if (sortedArr[i] <= topSum) {
				topIndex = i;
				break;
			}
		}
		console.log(topIndex);
		if (topIndex === 0) {
			return false;
		}
		for (let i = 0; i < topIndex; ) {
			let tmp = getAvg(sortedArr[i], sortedArr[topIndex]);
			console.log(tmp);
			if (tmp === targetAverage) {
				console.log(`found ${sortedArr[i]} and ${sortedArr[topIndex]}`);
				return true;
			}
			if (tmp > targetAverage) {
				topIndex--;
			} else {
				i++;
			}
		}
		return false;
	};
	const getAvg = (...args): number => {
		let sum = 0;
		for (const a of args) {
			sum += a;
		}
		return sum / args.length;
	};
	console.log(averagePair([0, 1, 2, 3, 4, 7, 8, 9, 17], 16));
	console.log(averagePair([0, 1, 2, 3, 4, 7, 8, 9, 17], 8));
	console.log(averagePair([0, 1, 2, 3, 4, 7, 8, 16, 17], 8));
	console.log(averagePair([0, 1, 2, 3, 4, 7, 8, 17], 8));
})();
