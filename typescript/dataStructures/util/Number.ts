import { Comparable, Countable } from './Comparable';
export class Number implements Comparable, Countable {
	public count: number = 1;
	constructor(public num: number) {}
	lessThen(val: Number): boolean {
		return this.num < val.num;
	}
	gtrThen(val: Number): boolean {
		return this.num > val.num;
	}
}
