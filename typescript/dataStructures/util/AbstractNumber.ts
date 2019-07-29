import { Comparable, Countable } from './Able';
export class AbstractNumber implements Comparable, Countable {
	public count: number = 1;
	constructor(public num: number) {}
	lessThen(val: AbstractNumber): boolean {
		return this.num < val.num;
	}
	gtrThen(val: AbstractNumber): boolean {
		return this.num > val.num;
	}
}
