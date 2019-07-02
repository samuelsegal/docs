import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
	constructor(public data: number[]) {
		super();
	}
	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex] > this.data[rightIndex];
	}
	swap(leftIndex: number, rightIndex: number): void {
		const tmp = this.data[leftIndex];
		this.data[leftIndex] = this.data[rightIndex];
		this.data[rightIndex] = tmp;
	}
	//get acts accessor however users of NumbersCollection can simply call length rather than  getLength()
	get length(): number {
		return this.data.length;
	}
}
