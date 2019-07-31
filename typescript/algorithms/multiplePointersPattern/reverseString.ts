import { swapES2015 } from '../sorting/swap';
export const reverseStr = (str: string) => {
	const arr = str.split('');
	for (let i = 0, j = str.length - 1; i < j; ) {
		swapES2015(arr, i++, j--);
	}
	return arr.join('');
};
let str = 'sammy';
console.log(reverseStr(str));
