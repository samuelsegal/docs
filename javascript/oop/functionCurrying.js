//function currying
function multiply(a, b) {
	return a * b;
}
let multiplyBy3 = multiply.bind(this, 3);

console.log(multiplyBy3(5));
