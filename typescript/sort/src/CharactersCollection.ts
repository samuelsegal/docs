import { Sortable } from './Sorter';

export class CharactersCollection implements Sortable {
	compare(leftIndex: number, rightIndex: number): boolean {
		console.log(leftIndex);
		console.log(rightIndex);
		console.log(this.data);
		console.log(this.data[leftIndex]);
		console.log(this.data[rightIndex]);
		return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
	}
	swap(leftIndex: number, rightIndex: number): void {
		const chars = this.data.split('');
		const tmp = chars[leftIndex];
		chars[leftIndex] = chars[rightIndex];
		chars[rightIndex] = tmp;
		this.data = chars.join('');
	}
	constructor(public data: string) {}
	get length(): number {
		return this.data.length;
	}
}
