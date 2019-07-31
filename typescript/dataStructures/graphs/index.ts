import { Graph } from './Graph';
const graph = new Graph();
graph.addVertex('Atl');
graph.addVertex('Sav');
graph.addVertex('SF');
graph.addVertex('DC');
graph.addEdge('Atl', 'Sav');
console.log(graph);

graph.removeVertex('Atl');
console.log(graph);

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.depthFirstTraverseRecursive('A'));
console.log(g.depthFirstTraverseIterative('A'));
console.log(g.depthFirstTraverseRecursive('A'));
console.log(g.depthFirstTraverseIterative('A'));
console.log(g.breadthFirstTraverse('A'));
/**
 *        A
 *       / \
 *      B   C
 *      |   |
 *      D - E
 *       \ /
 *        F
 */

/**
 *        A
 *      /   \
 *     B     E
 *     |\   /|
 *     C \ / F
 *      \   /
 *        D
 */
