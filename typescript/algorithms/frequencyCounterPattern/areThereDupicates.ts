/**
 * Implement a funciton called are the duplicates which accepts a variable number of args and checks whether there are any duplicates among the ars passed in.
 */

(function() {
	const areThereDuplicates = (...args: any[]) => {
		const tmp: any = {};
		for (let val of args) {
			if (tmp[val]) {
				return true;
			} else {
				tmp[val] = val;
			}
			console.log(val);
		}
		return false;
	};
	function areThereDuplicatesLinear(...args: any[]) {
		return new Set(args).size !== args.length;
	}
	console.log(areThereDuplicates(1, 2, 3, 'a'));
	console.log(areThereDuplicates(1, 2, 3, 'a', 2));
	console.log(areThereDuplicatesLinear(1, 2, 3, 2));
})();
