//function currying
function multiply(a, b) {
	return a * b;
}
//using bind
const multiplyBy4 = multiply.bind(this, 4);

//chaining
const multiplyBy = num1 => num2 => multiply(num1, num2);
const multiplyBy2 = multiplyBy(2);
const multiplyBy3 = multiplyBy(3);
console.log(multiplyBy2(15));
console.log(multiplyBy3(21));
console.log(multiplyBy4(25));
