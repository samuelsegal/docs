import {
	bubbleSortData,
	mergeSortData,
	selectionSortData,
	insertionSortData,
	quickSortData,
	radixSortData,
} from './Util';
import { Direction } from './Direction';
import { InsertionSort } from './InsertionSort';
import { BubbleSort } from './BubbleSort';
import { performance } from 'perf_hooks';
import { AllSorts } from './AllSorts';
import { MergeSort } from './MergeSort';
import { SelectionSort } from './SelectionSort';
import { QuickSort } from './QuickSort';
import { RadixSort } from './RadixSort';

const allSorts = new AllSorts();

let time1 = performance.now();
//console.log(`Insertion Sort:\n${sortData}\n)`);
const insertSort = new InsertionSort(insertionSortData);
insertSort.sort(Direction.DESC);
//insertSort.arr.forEach(data => console.log(data));
let time2 = performance.now();
const insertTime = (time2 - time1) / 1000;

time1 = performance.now();
//console.log(`Bubble Sort:\n${sortData}\n)`);
const bubbleSort = new BubbleSort(bubbleSortData);
bubbleSort.sort(Direction.DESC);
//bubbleSort.arr.forEach(data => console.log(data));
time2 = performance.now();
const bubbleTime = (time2 - time1) / 1000;

time1 = performance.now();
//console.log(`Bubble Sort:\n${sortData}\n)`);
const selectionSort = new SelectionSort(selectionSortData);
selectionSort.sort(Direction.ASC);
//bubbleSort.arr.forEach(data => console.log(data));
time2 = performance.now();
const selectionTime = (time2 - time1) / 1000;

time1 = performance.now();
//console.log(`Bubble Sort:\n${sortData}\n)`);
const mergeSort = new MergeSort(mergeSortData);
mergeSort.sort(Direction.ASC);
//mergeSort.arr.forEach(data => console.log(data));
time2 = performance.now();
const mergeTime = (time2 - time1) / 1000;

time1 = performance.now();
const quickSort = new QuickSort(quickSortData);
quickSort.sort(Direction.ASC);
time2 = performance.now();
const quickTime = (time2 - time1) / 1000;

time1 = performance.now();
const radixSort = new RadixSort(radixSortData);
radixSort.sort(Direction.ASC);
time2 = performance.now();
const radixTime = (time2 - time1) / 1000;

allSorts.push(insertSort);
allSorts.push(bubbleSort);
allSorts.push(mergeSort);
allSorts.push(selectionSort);
allSorts.push(quickSort);
//console.log(allSorts.printAll());
console.log(mergeSort.counter);
console.log(`Insertion Sort time elapsed: ${insertTime} seconds`);
console.log(`Bubble Sort time elapsed: ${bubbleTime} seconds`);
console.log(`Selection Sort time elapsed: ${selectionTime} seconds`);
console.log(`Merge Sort time elapsed: ${mergeTime} seconds`);
console.log(`Quick Sort time elapsed: ${quickTime} seconds`);
console.log(`Radix Sort time elapsed: ${radixTime} seconds`);
