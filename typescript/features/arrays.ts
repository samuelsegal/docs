const carMakers: String[] = [new String('ford'), new String('toyota'), new String('chevy')];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corrolla'], ['camero']];

//Help with inference when extracting values
//Also note that we a re redeclaring a blockscope variable var which was also declared in variables.ts, type script no likey but it is ok for this case
const car = carMakers[0];
console.log(car);
const myCar = carMakers.pop();
console.log(myCar);

//below no worky
//carMakers.push(100);

console.log(
	carMakers.map(
		(car: String): String => {
			return car.toUpperCase();
		}
	)
);

//Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('05:14:1234');
importantDates.push(new Date());
