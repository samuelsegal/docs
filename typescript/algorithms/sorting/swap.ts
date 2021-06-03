export const swap = (arr: any, index1: number | string, index2: number | string): any => {
	const tmp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = tmp;
	return arr;
};
export const swapES2015 = (arr: any, index1: number | string, index2: number | string): any => {
	[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};
