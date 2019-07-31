export class Graph {
	adjacencyList: any[] = [];
	constructor() {}
	addVertex = (name: string) => {
		if (!this.adjacencyList[name]) {
			this.adjacencyList[name] = [];
		}
	};
	addEdge = (vertext1: string, vertext2: string) => {
		this.adjacencyList[vertext1].push(vertext2);
		this.adjacencyList[vertext2].push(vertext1);
	};
	removeEdge = (vertex1: string, vertex2: string) => {
		this.adjacencyList[vertex1] = this.adjacencyList.filter(vert => vert !== vertex2);
		this.adjacencyList[vertex2] = this.adjacencyList.filter(vert => vert !== vertex1);
	};
	removeVertex = (name: string) => {
		const arr = this.adjacencyList[name];
		arr.forEach(element => {
			this.removeEdge(element, name);
		});
		delete this.adjacencyList[name];
	};
	depthFirstTraverseRecursive = (start: string): any[] => {
		const result = [];
		const visited = {};
		const traverseHelper = (vertex: string) => {
			if (!vertex) {
				return null;
			}
			visited[vertex] = true;
			result.push(vertex);
			this.adjacencyList[vertex].forEach(neighbor => {
				if (!visited[neighbor]) {
					return traverseHelper(neighbor);
				}
			});
		};
		traverseHelper(start);
		return result;
	};
	depthFirstTraverseIterative = (start: string): any[] => {
		let stack = [];
		const result = [];
		const visited = {};

		stack.push(start);
		//visited[start] = true;
		while (stack.length) {
			const vertex = stack.pop();
			if (!visited[vertex]) {
				visited[vertex] = true;
				result.push(vertex);
				this.adjacencyList[vertex].forEach(element => {
					stack.push(element);
				});
			}
		}
		return result;
	};
	breadthFirstTraverse = (start: string): any[] => {
		const queue = [];
		queue.push(start);
		const result = [];
		const visited = {};
		visited[start] = true;
		while (queue.length) {
			const vertex = queue.shift();
			result.push(vertex);
			this.adjacencyList[vertex].forEach(element => {
				if (!visited[element]) {
					visited[element] = true;
					queue.push(element);
				}
			});
		}
		return result;
	};
}
