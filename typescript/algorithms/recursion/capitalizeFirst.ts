/**
 * write a recursive function called capitalizeeFirst. Given an array of
 * strings, capitalize the first letter of each string in the array
 */
const capitalizeFirst = (arr: string[]) => {
	const res = [];
	for (let str of arr) {
		res.push(str.substr(0, 1).toUpperCase() + str.slice(1));
	}
	return res;
};

console.log('string'.substr(0, 1).toUpperCase() + 'string'.slice(1));
console.log(capitalizeFirst(['string', 'poof']));
console.log(['sadasd', 'asdfgfg'].slice(0, 1));
