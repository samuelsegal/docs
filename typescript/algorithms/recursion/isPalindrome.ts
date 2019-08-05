/**
 * Palindrome - a string that reads the same forward and backward.
 */
const isPalindrome = (s: string) => {
	const str = s.split('');
	const mid = Math.floor((str.length - 1) / 2);
	let j = str.length - 1;
	let i = 0;
	let ret = false;
	const helper = () => {
		if (j === mid || i === mid) {
			ret = true;
			return ret;
		}
		if (str[i++] === str[j--]) {
			helper();
		} else {
			ret = false;
			return ret;
		}
	};
	if (j > 0) {
		helper();
	}
	return ret;
};
console.log(isPalindrome('acaramanamaraca'));
