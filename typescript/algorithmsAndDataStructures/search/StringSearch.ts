import { SIGBUS } from 'constants';
import { LinkedList } from '../../sort/src/LinkedList';

/**
 * Find how many times a substring exists in a given string
 */
export class StringSearch {
	/**
	 * loop through then for each find loop through sub
	 */
	static findSubNotSoOptimal = (str: string, sub: string): number => {
		if (sub.length > str.length) {
			return 0;
		}
		let matchCount = 0;
		for (let i = 0; i < str.length; i++) {
			if (str[i] === sub[0]) {
				for (let c = 0; c < sub.length; ) {
					if (str[i + c] !== sub[c++]) {
						break;
					}
					if (c === sub.length) {
						matchCount++;
					}
				}
			}
		}
		return matchCount;
	};
}
console.log(StringSearch.findSubNotSoOptimal('dummudumum', 'um'));
