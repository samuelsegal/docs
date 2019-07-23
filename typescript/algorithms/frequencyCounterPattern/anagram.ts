import { stringify } from 'querystring';
/**
 * Uses optimal frequency counter pattern. 🏂
 */
(function() {
	const anagramChecker = (str1: string, str2: string): boolean => {
		type MapType = { [key: string]: number };
		if (str1.length !== str2.length) {
			return false;
		}
		const charMap1: MapType = {};

		for (let key of str1) {
			charMap1[key] = (charMap1[key] || 0) + 1;
		}

		const charMap2: MapType = {};

		for (let key of str2) {
			charMap2[key] = (charMap2[key] || 0) + 1;
			if (!charMap1[key]) {
				return false;
			} else {
				charMap1[key]--;
			}
		}

		return true;
	};

	console.log(anagramChecker('anagram', 'nangram'));
	console.log(anagramChecker('anagram', 'agramna'));
	console.log(anagramChecker('tooo', 'too'));
	console.log(anagramChecker('toto', 'toot'));
})();
