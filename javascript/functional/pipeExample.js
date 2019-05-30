const pipe = (f, g, h) => data => h(g(f(data)));
const multiplyBy3 = num => num * 3;
const add3 = num => num + 3;
const abs = num => Math.abs(num);
const muliplyBy3Add3Absolute = pipe(
	multiplyBy3,
	add3,
	abs
);
console.log(muliplyBy3Add3Absolute(-5));
