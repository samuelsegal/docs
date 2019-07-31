import { MaxBinaryHeap } from './MaxBinaryHeap';
import { AbstractNumber } from './util/AbstractNumber';
import { Comparable } from './util/Able';
import { Task } from './util/Task';
const heap = new MaxBinaryHeap([]);
heap.insert(new AbstractNumber(10));
heap.insert(new AbstractNumber(70));
heap.insert(new AbstractNumber(20));
heap.insert(new AbstractNumber(50));
heap.insert(new AbstractNumber(333));
heap.insert(new AbstractNumber(15));
heap.insert(new AbstractNumber(22));
heap.insert(new AbstractNumber(1));
heap.insert(new AbstractNumber(44));
heap.print();

heap.extractMax();
heap.print();
heap.extractMax();
heap.print();
heap.extractMax();
heap.print();
heap.extractMax();
heap.print();
heap.extractMax();
heap.print();
heap.extractMax();
heap.print();
heap.extractMax();
console.log(heap.isEmpty());
heap.print();
heap.extractMax();
heap.extractMax();
console.log(heap.isEmpty());

const emergencyTask = new Task('Emergency, the martians are coming', 2);
const takeYourTimeTask = new Task('No worries', 5);
const pleaseHurryTask = new Task('As soon as you can please', 3);
const dropEverything = new Task('You have no choice', 1);

const priorityQueue = new MaxBinaryHeap([]);
priorityQueue.insert(emergencyTask);
priorityQueue.insert(takeYourTimeTask);
priorityQueue.insert(pleaseHurryTask);
priorityQueue.insert(dropEverything);

priorityQueue.print();
priorityQueue.extractMax();
priorityQueue.print();
