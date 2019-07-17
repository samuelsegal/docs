/**
 * Fibonacci - Sequence of whole numbers starting at 1,1 and is followed by the
 * addition of 2 previous numbers. 1,1,2,3,5,8,13.
 * Write a function called fib which accepts a number and returns the nth number in Fibonacci sequence
 * fib(4) // 3
 * fib(10) //55
 */
(function() {
	/**
	 * First attempt using helper recursive
	 * @param num
	 */
	const fib = (num: number): number => {
		if (num <= 1) {
			return 1;
		}
		let counter = 1;
		let fibs = [1];
		const helper = (seq: number): number => {
			console.log(`seq: ${seq}`);
			fibs[counter] = seq;
			if (++counter === num) {
				return seq;
			}
			return helper(fibs[counter - 2] + seq);
		};
		return helper(1);
	};
	console.log(fib(10));
	/**
	 * Less code - pure recursion, I believe is actually worse on performance.
	 * @param n
	 */
	function fibPureRecursive(n: number): number {
		console.log(`n: ${n}`);
		if (n <= 2) return 1;
		return fibPureRecursive(n - 1) + fibPureRecursive(n - 2);
	}
	console.log(fibPureRecursive(10));
})();
