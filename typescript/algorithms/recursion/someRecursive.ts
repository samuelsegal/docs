/**
 * accepts an array and a callback, the function returns true if a single value 
 * in the array returns true when passed to the callback
 * // SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
 */

const someRecursive = (arr: any[], func: Function) => {
	let ret = false;
	arr.forEach(val => {
		if (func(val)) {
			ret = true;
			return ret;
		}
	});
	return ret;
};
const isOdd = val => val % 2 !== 0;
console.log(someRecursive([2, 4], isOdd));
