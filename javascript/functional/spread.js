const arr = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
	return a + b + c + d + e;
}
console.log(sum(...arr));

const obj = {
	prop1: 1,
	prop2: 2,
	prop3: 3,
};
const { prop1, ...rest } = obj;
console.log('prop1: ', prop1);
console.log('rest: ', rest);
