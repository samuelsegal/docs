/**
 * Naive Solution:
 * Time Copmlexity - O(N^2)
 * Space Complexity O(1)
 */
(function() {
	const sumZero = (sortedNumArr): number[] => {
		const ret = [];
		for (let i = 0; i < sortedNumArr.length; i++) {
			for (let j = i + 1; j < sortedNumArr.length; j++) {
				if (sortedNumArr[i] + sortedNumArr[j] === 0) {
					return [sortedNumArr[i], sortedNumArr[j]];
				}
			}
		}
		return ret;
	};
	console.log(sumZero([-6, -3, -2, 0, 1, 2, 3]));
})();
