/**
 * Write a recursive function which accepts an arrray and returns a new array
 * with all values flattened
 */
const flatten = (arr: any[]) => {
	let flat = [].concat(...arr);
	return flat.some(Array.isArray) ? flatten(flat) : flat;
};

const flatty = (arr: any[]) => {
	return arr.reduce((x, y) => x.concat(Array.isArray(y) ? flatty(y) : y), []);
};
console.log(flatten([[1, 2, 3, [4, 5]]]));
console.log(flatty([[1, 2, 3, [4, 5]]]));

// using Es6 reduce()
let flatIt = array => array.reduce((x, y) => x.concat(Array.isArray(y) ? flatIt(y) : y), []);
console.log(flatIt([[1, 2, 3, [4, 5]]]));
