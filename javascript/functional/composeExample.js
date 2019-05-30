const compose = (f, g) => data => f(g(data));
const multiplyBy3 = num => num * 3;
const add3 = num => num + 3;
const addAndMultiplyBy3 = compose(
	multiplyBy3,
	add3
);
console.log(addAndMultiplyBy3(5));
