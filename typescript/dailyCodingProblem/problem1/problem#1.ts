import { ListMerger } from './ListMerger';
import { NumbersList } from './List';
/*
 * Problem:  return a new sorted merged list from K sorted lists, each with size N.
 */
const l1: number[] = [10, 15, 30];
const l2: number[] = [12, 15, 20];
const l3: number[] = [17, 20, 32];
const m: number[][] = [l1, l2, l3];
const merged = new ListMerger(m);

console.log(merged.mergeNumbersList());

const numbersList = new NumbersList(merged.mergeNumbersList());

numbersList.sort();

console.log(numbersList.list);
