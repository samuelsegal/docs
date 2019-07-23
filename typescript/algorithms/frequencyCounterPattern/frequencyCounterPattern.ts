/**
 * Write a function called sameFrequency. Gieven 2 positive
 * integers, find out if the 2 numbers have the same frequencey of digits
 * MUST  have following complexities Time: O(N)
 */

(function() {
	type FrequencyType = { [key: string]: number };
	const sameFrequency = (num1: number, num2: number): boolean => {
		let freqs1: FrequencyType = {};
		let freqs2: FrequencyType = {};

		for (let key of num1.toString()) {
			freqs1[key] = (freqs1[key] || 0) + 1;
		}
		for (let key of num2.toString()) {
			freqs2[key] = (freqs2[key] || 0) + 1;
			if (!freqs1[key]) {
				//None found
				return false;
			} else {
				freqs1[key]--;
			}
		}
		return true;
	};
	console.log(sameFrequency(123, 321));
	console.log(sameFrequency(123, 421));
	console.log(sameFrequency(23, 421));
	console.log(sameFrequency(2341, 3421));
})();
