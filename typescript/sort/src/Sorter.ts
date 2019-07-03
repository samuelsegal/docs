//Sortable is preferred if we are using very different objects. It promotes loose coupling
//Implement this class in conjunction with SorterWrapper.
export interface Sortable {
	length: number;
	compare(leftIndex: number, rightIndex: number): boolean;
	swap(leftIndex: number, rightIndex: number): void;
}

//extending abstrat classes is good for when we want to build up a definition for an object
//this strongly couples the classes together, as if they are in a group with similliar objectives
/*
 * Extend this class. THen we can execute sort directly from class rather using wrapper.
 */
export abstract class Sorter {
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;
	abstract length: number;
	//bubble sort
	sort(): void {
		const { length } = this;
		for (let i = 0; i < length; i++) {
			for (let z = 0; z < length - i - 1; z++) {
				if (this.compare(z, z + 1)) {
					this.swap(z, z + 1);
				}
			}
		}
	}
}
/*
 * Use this class in coorelation with Sortable Interface to wrap the Sortable class for sort() execution of said class
 */
export class SorterWrapper {
	constructor(public collection: Sortable) {
		this.collection = collection;
	}
	//bubble sort
	sort(): void {
		const { length } = this.collection;
		for (let i = 0; i < length; i++) {
			for (let z = 0; z < length - i - 1; z++) {
				if (this.collection.compare(z, z + 1)) {
					this.collection.swap(z, z + 1);
				}
			}
		}
	}
}
