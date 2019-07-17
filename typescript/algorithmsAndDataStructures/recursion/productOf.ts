/**
 * Write a function called productOfArray which takes in an array of numbers
 * and returns the product of them all.
 */
(function() {
	const productOfArrays = (nums: number[]): number => {
		if (nums.length === 0) {
			return 1;
		}
		return nums[0] * productOfArrays(nums.slice(1));
	};
	console.log(productOfArrays([1, 2, 3]));
})();
