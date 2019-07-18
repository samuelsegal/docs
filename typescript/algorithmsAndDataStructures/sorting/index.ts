import { sortData } from './Util';
import { Direction } from './Direction';
import { InsertionSort } from './InsertionSort';
import { BubbleSort } from './BubbleSort';
import { performance } from 'perf_hooks';
import { AllSorts } from './AllSorts';

const allSorts = new AllSorts();

let time1 = performance.now();
console.log(`Insertion Sort:\n${sortData}\n)`);
const insertSort = new InsertionSort(sortData);
insertSort.sort(Direction.DESC);
insertSort.arr.forEach(data => console.log(data));
let time2 = performance.now();
const insertTime = (time2 - time1) / 1000;
console.log(`Insertion Sort time elapsed: ${insertTime} seconds`);

allSorts.push(insertSort);

time1 = performance.now();
console.log(`Bubble Sort:\n${sortData}\n)`);
const bubbleSort = new BubbleSort(sortData);
bubbleSort.sort(Direction.DESC);
bubbleSort.arr.forEach(data => console.log(data));
time2 = performance.now();
const bubbleTime = (time2 - time1) / 1000;
console.log(`Bubble Sort time elapsed: ${bubbleTime} seconds`);

allSorts.push(bubbleSort);
allSorts.push(bubbleSort);
console.log(allSorts.getAllOfType(BubbleSort).length);
