/**
 * Write a function which acce[ts a number and returns the factorial of that
 * number. A factorial is the poroduct of an integer and all the intgers
 * between it and 0
 */
(function() {
	const factorial = (num: number): number => {
		if (num <= 1) {
			return 1;
		}
		return num * factorial(num - 1);
	};
	console.log(factorial(0));
})();
