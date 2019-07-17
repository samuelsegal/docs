(function() {
	/**
	 * Still attempting to make linear time / constant space.
	 * THis kind of uses frequecy Counter pattern.
	 * I think its complexity is:
	 * Time: O(n)
	 * Space: 0(n)
	 * Just need to fix the space complexity
	 * @param arr
	 */
	const findMissingLowest = (arr: number[]): number => {
		let lowest = 0;

		console.log(lowest);
		const keyHolder = {};
		let index = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] <= 0) {
				continue;
			} else {
				keyHolder[arr[i].toString()] = arr[i];
				if (arr[i] < lowest) {
					lowest = arr[i];
				}
				index++;
			}
		}
		console.log(lowest);
		let foundMissing = false;
		while (!foundMissing) {
			if (!keyHolder[++lowest]) {
				foundMissing = true;
			} else if (lowest > index) {
				lowest = lowest + 1;
				break;
			}
		}
		return lowest;
	};
	const arr = [1, 2, 0, 4, 5, 6, 7, -4, -9, 12, -12, 3, 10];
	console.log(`missing lowest positive int: ${findMissingLowest(arr)}`);
	const arr2 = [0, 1, 2, 3];
	console.log(`missing lowest positive int: ${findMissingLowest(arr2)}`);
	const arr3 = [-0, -1, -2, -3];
	console.log(`missing lowest positive int: ${findMissingLowest(arr3)}`);
})();
