interface List {
	sort(): void;
	compare(indexLeft: number, indexRight: number): boolean;
	swap(indexLeft: number, indexRight: number): void;
}
export class NumbersList implements List {
	compare(indexLeft: number, indexRight: number): boolean {
		return this.list[indexLeft] > this.list[indexRight];
	}
	swap(indexLeft: number, indexRight: number): void {
		const tmp = this.list[indexLeft];
		this.list[indexLeft] = this.list[indexRight];
		this.list[indexRight] = tmp;
	}
	constructor(public list: number[]) {}
	sort(): void {
		for (let i = 0; i < this.list.length; i++) {
			for (let z = 0; z < i; z++) {
				if (this.compare(z, z + 1)) this.swap(z, z + 1);
			}
		}
	}
}
