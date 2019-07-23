/**
 * Write a function that accepts a basre and an exponent. THe function should
 * return the power of the bawsze to the exponent.
 * do not worry about negatives
 */
(function() {
	let power = (base: number, exponent: number): number => {
		if (exponent === 1) {
			return base;
		} else if (exponent === 0) {
			return 1;
		}
		return base * power(base, exponent - 1);
	};

	console.log(power(5, 0));
	console.log(power(5, 1));
	console.log(power(5, 2));
	console.log(power(5, 3));
})();
