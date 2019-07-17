/**
 * Linear Search - go through each element in the array and c heck if it equal
 * to given value
 */
(function() {
	const indexOf = (arr: any[], value: any) => {
		let index = 0;
		for (let val of arr) {
			if (val === value) {
				return index;
			}
			index++;
		}
		return -1;
	};
	console.log(indexOf(['aa', 'aaa', 'bb', 'bbb'], 'bb'));
	console.log(indexOf([9, 4, 6, 3, 2, 1, 7], 1));
})();
