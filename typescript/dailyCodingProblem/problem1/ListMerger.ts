export class ListMerger {
	constructor(private arrayOfLists: number[][]) {}
	mergeNumbersList(): number[] {
		let combined: number[] = [];
		for (let arr of this.arrayOfLists) {
			for (let i = 0; i < arr.length; i++) {
				combined[combined.length] = arr[i];
			}
		}
		return combined;
	}
}
