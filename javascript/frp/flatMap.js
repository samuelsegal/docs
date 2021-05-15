/**
 * example of writing a flatMap function
 */

const flatMap = (arr, fn) => {
	return arr.reduce((flatArray, element) => {
		console.log(element);
		return flatArray.concat(fn(element));
	}, []);
};

console.log(flatMap([1, 3, 5, 7], (x) => [x, x + 1]));
