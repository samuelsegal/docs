/**
 * THink of it as extracting parameters out to individual functions.
 * I suppose this can be useful when a function requires an attribute that will always be the same within logic?
 */

//function currying
function multiply(a, b) {
	return a * b;
}
//using bind
const multiplyBy4 = multiply.bind(this, 4);

//using arrow function HOC
const multiplyBy = num1 => num2 => multiply(num1, num2);
const multiplyBy2 = multiplyBy(2);
const multiplyBy3 = multiplyBy(3);
console.log(multiplyBy2(15));
console.log(multiplyBy3(21));
console.log(multiplyBy4(25));

//using HOC
function add(a, b, c) {
	return a * b * c;
}
const addBy = function(num1) {
	return function(num2) {
		return function(num3) {
			return add(num1, num2, num3);
		};
	};
};
const addBy2And3 = addBy(2)(3);
console.log(addBy2And3(3));

/**
 * Another example for clarity
 * @param {} greeting 
 */
var greetCurried = function(greeting) {
	return function(name) {
		console.log(greeting + ', ' + name);
	};
};

var greetHello = greetCurried('Hello');

greetHello('Heidi');
greetHello('Eddie');
greetCurried('Hi there')('Howard');

