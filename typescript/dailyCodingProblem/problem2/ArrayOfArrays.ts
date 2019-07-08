// Totally misunderstood version, I misunderztood what they meant by product of all the numbers
export class ArrayOfArrays {
	constructor(private numArr: number[]) {}
	//my misunderstood solution under pressure
	createNewArray(): number[][] {
		const length = this.numArr.length;
		const newArr: number[][] = [];

		for (let i = 0; i < this.numArr.length; i++) {
			let counter = 0;
			newArr[i] = [];
			for (let z = 0; z < this.numArr.length; z++) {
				if (i !== z) {
					newArr[i][counter++] = this.numArr[z];
				}
			}
		}
		return newArr;
	}
}
