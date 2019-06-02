const mul = (a, b, c) => a * b * c;
const partialMultiplyBy3 = mul.bind(null, 3);
const partialMultiplyBy3And2 = mul.bind(null, 3, 2);
console.log(partialMultiplyBy3(8, 2));
console.log(partialMultiplyBy3And2(8));
