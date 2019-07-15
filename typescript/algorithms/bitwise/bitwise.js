const x1 = 0x0001;
const x17 = 0x0011;
const x32 = 0x0020;
const x768 = 0x0300;
const x33 = 0x0021;
console.log('Bitwise XOR ( eXclusive OR) MUST be one or the other not both not neither');
console.log(`0x0001 ^ 0x0011 = 0x0010 = 17(passes xor) - 1(did not pass xor) = ${x1 ^ x17}`);
console.log(`0x0001 ^ 0x0020 = 0x0021 = 1(passes) + 32(passes) = ${x1 ^ x32}`);
console.log(`0x0011 ^ 0x0020 = 0x0031 = ${x17 ^ x32}`);
console.log(`0x0300 ^ 0x0020 = 0x0320 = ${x768 ^ x32}`);
console.log(`0x0021 ^ 0x0020 = 0x0021 = ${x33 ^ x32}`);
const x15 = 0x000f;
const x40975 = 0xa00f;
console.log(0x0011);
console.log(`0xa00f ^ 0xa00f = 0xa000 ironically = 40975-15 = pass - didn't pass = ${0xa000}`);

const x4096 = 0x1000;
const x7936 = 0x1f00;
const x2560 = 0x0a00;
const x6656 = 0x1a00;
console.log(0x1000);
console.log(`0x1000 ^ 0x1f00 = 0x0f00 = 7936 - 4096 = ${x4096 ^ x7936}`);

console.log('use .toString(2) to view bits in binary form');
console.log((10).toString(2));
const b2 = 10;
const b16 = 16;
console.log(b16 >> 1);
console.log(18 ^ 17);
