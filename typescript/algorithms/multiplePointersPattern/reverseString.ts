import { swap } from '../sorting/swap';
export const reverseStrMultiPointer = (str: string) => {
	const arr = str.split('');
	for (let i = 0, j = str.length - 1; i < j; ) {
		swap(arr, i++, j--);
	}
	return arr.join('');
};
let str = 'sammy';
console.log(reverseStrMultiPointer(str));
