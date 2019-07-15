const same = (arr1: number[], arr2: number[]): boolean => {
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		//NAIVE: indexOf traverses through array2 causing this solution to be O(n2)
		const found = arr2.indexOf(arr1[i] ** 2);
		if (found === -1) {
			return false;
		}
		arr2.splice(found, 1);
	}
	return true;
};
const isSquared = same([1, 2, 3], [1, 4, 9]);
const notSquared = same([1, 2, 3], [1, 4, 1]);
console.log(`[1, 2, 3], [1, 4, 9]: ${same([1, 2, 3], [1, 4, 9])}`);
console.log(`[1, 2, 3], [1, 4, 1]: ${same([1, 2, 3], [1, 4, 1])}`);
console.log(`[2, 1, 3], [1, 9, 4]: ${same([2, 1, 3], [1, 9, 4])}`);
console.log(`[2, 1, 3], [9, 4]: ${same([2, 1, 3], [1, 4])}`);
console.log(`[1,2,1], [4,4,1]: ${same([1, 2, 1], [4, 4, 1])}`); //false ( must be same frequency)
