class ArrayOfNumbres {
	constructor(public collection: number[]) {}
	get(index: number): number {
		return this.collection[index];
	}
}

class ArrayOfStrings {
	constructor(public collection: string[]) {}
	get(index: number): string {
		return this.collection[index];
	}
}

class ArrayOfAnything<T> {
	constructor(public collection: T[]) {}
	get(index: number): T {
		return this.collection[index];
	}
}
//demonstrates Typescripts `Type Inference`: Notice we do not put type of collection below as we do after. THis is due top Type Inference
const arr = new ArrayOfAnything(['1', '2', 'three', '420']);
const arr2 = new ArrayOfAnything<string>(['1', '2', 'three', '420']);

//Examples of Generics with functions

function printStrings(arr: string[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}
function printNumbres(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}
function printAnything<T>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

printAnything<string>(['a', 'b', 'c']);
printAnything([1, 2, 3, 4, 5]);

//Generic Constraints
class Car {
	print() {
		console.log("I'm a car");
	}
}

class House {
	print() {
		console.log("I'm a house");
	}
}

interface Printable {
	print(): void;
} //Note:  House and Car could literally implement printable however this is not required
function printHousesOrCars<T extends Printable>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		arr[i].print();
	}
}

printHousesOrCars<House | Car>([new House(), new Car()]);
