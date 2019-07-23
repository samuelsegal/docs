//Not related but am using IIFE to hide scope of same, otherwise no can redeclare from sameNonOptimal.
//Not that it must be named same, just keeping js fresh
/**
 * This version runs * O(2n)
 */
(function() {
	type FrequencyType = { [key: number]: number };
	const same = (arr1: number[], arr2: number[]) => {
		if (arr1.length !== arr2.length) {
			return false;
		}

		const frequencyOfKeysArr2: FrequencyType = {};
		for (let key of arr2) {
			frequencyOfKeysArr2[key] = (frequencyOfKeysArr2[key] || 0) + 1;
		}
		const frequencyOfKeysArr1: FrequencyType = {};
		for (let key of arr1) {
			frequencyOfKeysArr1[key] = (frequencyOfKeysArr1[key] || 0) + 1;
			if (!frequencyOfKeysArr2[key ** 2]) {
				return false;
			} else {
				frequencyOfKeysArr2[key ** 2]--;
			}
		}
		return true;
	};
	console.log(`[1, 2, 3], [1, 4, 9]: ${same([1, 2, 3], [1, 4, 9])}`);
	console.log(`[1, 2, 3], [1, 4, 1]: ${same([1, 2, 3], [1, 4, 1])}`);
	console.log(`[2, 1, 3], [1, 9, 4]: ${same([2, 1, 3], [1, 9, 4])}`);
	console.log(`[2], [9, 4]: ${same([2], [1, 4])}`);
	console.log(`[1,2,1], [4,4,1]: ${same([1, 2, 1], [4, 4, 1])}`); //false ( must be same frequency )
})();
