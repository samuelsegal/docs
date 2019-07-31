import { PriorityQueue } from './PriorityQueue';
import { Comparable } from '../util/Able';
export class Edge implements Comparable {
	constructor(public node: string, public weight: number) {}
	lessThen(val: any): boolean {
		return this.weight < val.weight;
	}
	gtrThen(val: any): boolean {
		return this.weight > val.weight;
	}
}
export class WeightedGraph {
	adjacencyList: Edge[][] = [];
	constructor() {}
	addVertex = (name: string) => {
		if (!this.adjacencyList[name]) {
			this.adjacencyList[name] = [];
		}
	};
	addEdge = (vertex1: string, vertex2: string, weight: number) => {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	};
	/**
	 * dijkstra - shortest path
	 */
	dijkstra = (start, finish) => {
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		let smallest;
		let path = [];
		//build up initial state
		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}

		//as long as there is something to visit
		//while (!nodes.isEmpty()) {
		while (nodes.values.length) {
			smallest = nodes.dequeue().val;
			//console.log(smallest);
			if (smallest === finish) {
				//WE R DONE, BUILD PATH TO RETURN
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}
			if (smallest || distances[smallest] !== Infinity) {
				for (let neighbor in this.adjacencyList[smallest]) {
					//find neighboring node
					const nextNode = this.adjacencyList[smallest][neighbor];
					console.log(`neighbor: ${neighbor}, nextNode:`, nextNode);

					//calculate the new distance to neighboring node
					const candidate = distances[smallest] + nextNode.weight;
					const nextNeighbor = nextNode.node;
					if (candidate < distances[nextNeighbor]) {
						//update new smallest distance to neighbor
						distances[nextNeighbor] = candidate;
						//update previous so we know how we got to neighbor
						previous[nextNeighbor] = smallest;
						//enqueue priorityQueue with new priority
						nodes.enqueue(nextNeighbor, candidate);
					}
				}
			}
		}
		return path.concat(smallest).reverse();
	};
}
