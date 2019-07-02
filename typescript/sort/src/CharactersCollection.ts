import { Sorter, Sortable } from './Sorter';

export class CharactersCollection extends Sorter implements Sortable {
	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
	}
	swap(leftIndex: number, rightIndex: number): void {
		const chars = this.data.split('');
		const tmp = chars[leftIndex];
		chars[leftIndex] = chars[rightIndex];
		chars[rightIndex] = tmp;
		this.data = chars.join('');
	}
	constructor(public data: string) {
		super();
	}
	get length(): number {
		return this.data.length;
	}
}
