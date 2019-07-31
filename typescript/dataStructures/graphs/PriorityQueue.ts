import { MaxBinaryHeap } from '../MaxBinaryHeap';
import { Edge } from './WeightedGraph';

export class PriorityQueue<T> {
	queue: MaxBinaryHeap = new MaxBinaryHeap([]);
	constructor() {}
	enqueue = (val: any, priority: number): void => {
		const edge = new Edge(val, priority);
		this.queue.insert(edge);
	};
	dequeue = (): Edge => {
		return <Edge>this.queue.extractMax();
	};
	isEmpty = (): boolean => {
		return this.queue.isEmpty();
	};
}
//Naive slower queue below
// export class PriorityQueue {
// 	values: any[] = [];
// 	constructor() {}
// 	enqueue = (val: any, priority: number): void => {
// 		this.values.push({ val, priority });
// 		this.sort();
// 	};
// 	dequeue = (): any => {
// 		return this.values.shift();
// 	};
// 	sort = () => {
// 		this.values.sort((a, b) => a.priority - b.priority);
// 	};
// }
