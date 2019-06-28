const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let meNumbres: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

//Classes
class Car {}
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
	x: 10,
	y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

//When to use annotations

//1) Function that returns the 'any' type
const json = '{"x":10,"y":20}';
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords);

//2) When we declare a variable on one line and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
	if (words[i] === 'green') {
		foundWord = true;
	}
	console.log(foundWord);
	foundWord = false;
}
//3) When we have a variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numbAbove0: boolean | numbermn = false;
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numbAbove0 = numbers[i];
	}
}
