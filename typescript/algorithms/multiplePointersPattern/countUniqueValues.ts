/**
 * Implement a function called countUniqueValues, which accepta a sorted arrat,
 * and counts the unique values in the array. There can be negative numers in
 * the array but it will always be sorted.
 * countUniqueValues([1,2,3,4,12,13]) // 6
 */
/**
 * First Attempt - Terrible as space use increases - O(n) = linear time BUT Not in constant space.
 * @param (sorted integer array)
 */
const countUniqueValuesv1 = (arr: number[]): number => {
	const uniqueArr = [];
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (i === 0) {
			uniqueArr[count] = arr[i];
		}
		if (uniqueArr[count] !== arr[i]) {
			uniqueArr[++count] = arr[i];
		}
	}
	return uniqueArr.length;
};
console.log(countUniqueValuesv1([1, 1, 1, 2, 3, 6, 6, 6, 6, 7]));

/**
 * Fixed First Attempt. O(n) = linear time and conmstant space
 * @param (sorted integer array)
 */
const countUniqueValuesv2 = (arr: number[]): number => {
	let count = 1;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] !== arr[i + 1]) {
			count++;
		}
	}
	console.log(`Array stays unmodified: ${arr}`);
	return count;
};
console.log(countUniqueValuesv2([1, 1, 1, 2, 3, 6, 6, 6, 6, 7]));

/**
 * Uses 2 Pointers pointing into array. For demostration purpose only
 * Because really there is no need to modify the array in which above solution works just as well.
 * O(n) = linear time && constant space
 * @param (sorted integer array)
 */
const countUniqueValuesWIthMultiPointer = (arr: number[]): number => {
	let count = 0;
	if (arr.length == 0) {
		return 0;
	}
	for (let i = 1; i < arr.length; i++) {
		if (arr[count] !== arr[i]) {
			//an example of using 2 pointers to an array
			arr[++count] = arr[i];
		}
	}
	console.log(
		`Modified Array demonstrating 2 pointers:  ${arr} \nNot a good example in my obnoxious opinion But that's ok.`
	);
	return ++count;
};
console.log(countUniqueValuesWIthMultiPointer([1, 1, 1, 2, 3, 6, 6, 6, 6, 7]));
console.log(countUniqueValuesWIthMultiPointer([]));
