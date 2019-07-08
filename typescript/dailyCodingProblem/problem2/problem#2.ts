import { ArrayOfArrays } from './ArrayOfArrays';
import { ProductOfs } from './ProductOfs';
import { performance } from 'perf_hooks';
/*
 * Given an array of integers, return a new array such that each element
 * at index i of the new array is the product of all the numbers in the
 * original array except the one at i.
 */

const numArr = [0, 15, 2, 3, 4, 5, 6, 7, 8];

const newArr = new ArrayOfArrays(numArr);
console.log(`My Misunderstood Answer: `, newArr.createNewArray());

const easyArr = [3, 2, 1, 4, 8, 3];
const correctNewArr = new ProductOfs(easyArr);
let start = performance.now();
console.log(`My ReUnderstood Answer: `, correctNewArr.prodOfArr());
let stop = performance.now();
console.log(`Time elapsed:  ${(stop - start) / 1000} secs`);
start = performance.now();
console.log('Tech lead optimal solution: ', correctNewArr.productOfUsingDivision());
stop = performance.now();
console.log(`Time elapsed:  ${(stop - start) / 1000} secs`);
start = performance.now();
console.log('Tech lead no division optimal solution: ', correctNewArr.productOfNoDivision());
stop = performance.now();
console.log(`Time elapsed:  ${(stop - start) / 1000} secs`);
