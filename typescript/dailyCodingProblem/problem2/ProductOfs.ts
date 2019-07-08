export class ProductOfs {
	constructor(private numArr: number[]) {}
	//my solution under pressure
	prodOfArr(): number[] {
		const length = this.numArr.length;
		const newArr: number[] = [];
		let total = 1;
		for (let i = 0; i < length; i++) {
			for (let z = 0; z < length; z++) {
				if (z !== i && this.numArr[z] != 0) {
					total *= this.numArr[z];
				}
			}
			newArr[i] = total;
			total = 1;
		}
		return newArr;
	}

	//implementation of techlead optimal Solution - much faster
	productOfUsingDivision(): number[] {
		const length = this.numArr.length;
		const newArr: number[] = [];
		let allTotal = 1;
		for (let i = 0; i < length; i++) {
			allTotal *= this.numArr[i];
		}
		for (let i = 0; i < length; i++) {
			newArr[i] = allTotal / this.numArr[i];
		}
		return newArr;
	}

	//implementation of techleads solution without using division
	productOfNoDivision(): number[] {
		const length = this.numArr.length;
		let pref: number[] = this.generatePrefixProds();
		let suff: number[] = this.generateSuffixProds();
		const newArr = [];
		for (let i = 0; i < length; i++) {
			if (i === 0) {
				newArr[i] = suff[i + 1];
			} else if (i === length - 1) {
				newArr[i] = pref[i - 1];
			} else {
				newArr[i] = pref[i - 1] * suff[i + 1];
			}
		}
		return newArr;
	}
	private generatePrefixProds(): number[] {
		const length = this.numArr.length;
		let preProds = [];
		for (let i = 0; i < length; i++) {
			if (i === 0) {
				preProds[i] = this.numArr[0];
			} else {
				preProds[i] = preProds[i - 1] * this.numArr[i];
			}
		}
		console.log('preprods: ', preProds);
		return preProds;
	}
	private generateSuffixProds(): number[] {
		const length = this.numArr.length;
		let sufProds = [];
		for (let i = length - 1; i >= 0; i--) {
			if (i === length - 1) {
				sufProds[i] = this.numArr[length - 1];
			} else {
				sufProds[i] = sufProds[i + 1] * this.numArr[i];
			}
		}
		console.log('sufProds: ', sufProds);
		return sufProds;
	}
}
