/**
 * Write a function called findLongestSubstring, which accepts a string and
 * returns the length of the longest substring with all distinct characters
 * Time Complexity: 0(n)
 * findLongestSubstring('ddddd') //1
 */
(function() {
	const findLongestSubstring = (str: string): number => {
		let distinctWindow = {};
		let j = 0;
		let len = 0;
		for (let i = 0; i < str.length; i++) {
			let key = str[i];
			//everytime we find a match move left pointer to the index of where matched
			if (distinctWindow[key]) {
				console.log('numbre', distinctWindow[key]);
				j = Math.max(j, distinctWindow[key]);
			}
			//always set length to the longest of itself or i - j + 1
			len = Math.max(len, i - j + 1);
			//always set key to latest value of index
			distinctWindow[key] = i + 1;
		}
		return len;
	};
	console.log(findLongestSubstring('thisisawesome'));
	console.log(findLongestSubstring('iiiiiiiii'));
	console.log(findLongestSubstring('longestsubstring'));
	console.log(findLongestSubstring('thecatinthehat'));
	console.log(findLongestSubstring(''));
	console.log(findLongestSubstring('rithmschool'));
})();
