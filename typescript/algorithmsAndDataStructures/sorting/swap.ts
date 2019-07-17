export const swap = (arr: any, index1: number | string, index2: number | string): any => {
	const tmp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = arr[index1];
	return arr;
};
export const es2015Swap = (arr: any, index1: number | string, index2: number | string): any => {
	[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};
