import { Comparable, Countable, Valuable, Numericable } from './Able';
export class AbstractNumber implements Comparable, Countable, Numericable {
	public count: number = 1;
	constructor(public num: number) {}
	lessThen(val: AbstractNumber): boolean {
		return val === undefined || this.num < val.num;
	}
	gtrThen(val: AbstractNumber): boolean {
		return val === undefined || this.num > val.num;
	}
}
