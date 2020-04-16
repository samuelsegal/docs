const animals = {
	tiger: 1,
	lion: 2,
	you: 3,
};
const { ...rest } = animals;
console.log(rest);
const { tiger, ...restofem } = animals;
const objectSpread = (p1, p2) => {
	console.log(p1);
	console.log(p2);
};
objectSpread(tiger, restofem);
