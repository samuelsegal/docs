import { SIGBUS } from 'constants';
export const reverseStrRecursive = (str: string) => {
	if (str === '') {
		return str;
	} else {
		console.log(str.substr(1));
		return reverseStrRecursive(str.substr(1)) + str[0];
	}
};
console.log(reverseStrRecursive('sammy'));
