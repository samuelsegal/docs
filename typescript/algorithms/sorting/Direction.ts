export enum Direction {
	ASC = 'ASC',
	DESC = 'DESC',
}
export class Comparator {
	static gtrThen = (leftVal: any, rightVal: any): boolean => {
		return leftVal > rightVal;
	};
	static lessThen = (leftVal: any, rightVal: any): boolean => {
		return leftVal < rightVal;
	};
}
