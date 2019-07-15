/**
 * Write a funciton called maxSubarraySum which accepts an array of integers an a number called n.
 * The function should calculated the maxumim sim of n consecutive elements in the array
 * maxSubarraySum([1,2,5,2,8,1,5])//10
 * maxSubArraySum([4,2,1,6], 1) // 6)
 */

(function() {
	/**
	 * Solution that is not as optimal as could be.
	 * O( n * n) =  Do they call this linear squared time?
	 * @param nums
	 * @param num
	 */
	const maxSubArraySumNaive = (nums: number[], num: number): number => {
		//Negative Infinity to assist negative equations
		let max = -Infinity;
		for (let i = 0; i < nums.length + 1 - num; i++) {
			let tmp = 0;
			for (let j = i; j < i + num; j++) {
				tmp += nums[j];
			}
			if (tmp > max) {
				max = tmp;
			}
		}
		return max;
	};
	/**
	 * Optimal solution: O(n) = linear time
	 * @param nums
	 * @param num
	 */
	const maxSubArraySumOptimal = (nums: number[], num: number): number => {
		let tmpSum = 0;
		let maxSum = 0;
		//only iterativel accumulate 1 time
		for (let i = 0; i < num; i++) {
			maxSum += nums[i];
		}
		tmpSum = maxSum;
		for (let i = num; i < nums.length; i++) {
			//here we have our sliding window that we simply subtract bottom and add next
			//rather than iteratively accumulate through each index of the window. capiche? 🏓
			tmpSum = tmpSum - nums[i - num] + nums[i];
			if (tmpSum > maxSum) {
				maxSum = tmpSum;
			}
		}
		return maxSum;
	};
	console.log('Naive:');
	console.log(maxSubArraySumNaive([1, 2, 5, 2, 8, 1, 5], 2));
	console.log(maxSubArraySumNaive([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
	console.log(maxSubArraySumNaive([-2, -1, -8, -9], 2));
	console.log('Optimal');
	console.log(maxSubArraySumOptimal([1, 2, 5, 2, 8, 1, 5], 2));
	console.log(maxSubArraySumOptimal([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
	console.log(maxSubArraySumOptimal([-2, -1, -8, -9], 2));
})();
