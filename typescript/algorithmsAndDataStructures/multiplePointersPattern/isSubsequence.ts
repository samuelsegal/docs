(function() {
	/**
	 * Write a function called isSubsequence which takes in two strings and
	 * checks whether the characters in the first string appear somewhere
	 * in the second string without their order changing
	 * Complexities:
	 * Time: O(n+m)
	 * Space: O(1)
	 * @param seq
	 * @param str
	 */
	const isSubsequence = (seq: string, str: string): boolean => {
		let count = 0;
		for (let i = 0; i < str.length; i++) {
			//console.log(`seq[count]: ${seq[count]} str[i]: ${str[i]}`);
			if (seq[count] === str[i]) {
				count++;
				if (seq[count] === undefined) {
					return true;
				}
			}
		}
		//console.log(count);
		return count === seq.length;
	};
	console.log(isSubsequence('hello', 'hheellpoho'));
	console.log(isSubsequence('hello', 'hellooooo'));
	console.log(isSubsequence('hjk', 'herjgwerwej'));
})();
