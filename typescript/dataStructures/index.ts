import { DoublyLinkedList } from './DoublyLinkedList';
import { SinglyLinkedList } from './SinglyLinkedList';
import { Queue } from './Queue';
let doubly = new DoublyLinkedList();
doubly.push('howdy');
doubly.push('partner');
doubly.push('all around');
doubly.push('cmon down');
doubly.push('its funky town');
doubly.print();
console.log(doubly.pop());
console.log(doubly);
doubly.shift();
doubly.print();
doubly.unshift('wahoooooa');
doubly.print();
console.log(doubly.get(0));
console.log(doubly.get(1));
console.log(doubly.get(3));
console.log(doubly.set(2, 'hollly st. patrick`'));
console.log(doubly.get(2));
doubly.print();
console.log(doubly.insert(2, 'hey now'));
doubly.print();
console.log(doubly.remove(3));
doubly.print();

const q = new Queue();
console.log(q.enqueue('first'));
console.log(q.enqueue('sec'));
console.log(q.enqueue('third'));
console.log(q.dequeue());
// const list = new SinglyLinkedList();

// list.push('hi');
// list.push('there');
// list.push('rabbit');
// list.push('ouhounb');
// list.push('sdfg');
// list.print();
// list.pop();
// list.print();
// list.shift();
// list.print();
// list.push('END');
// list.push('END');
// list.push('END');

// let ret = list.get(2);

// console.log('2nd index: ', list.get(2), ret);
// list.set(2, 'Holy Scanolly');
// console.log(`2nd index: `, list.get(2));
// list.set(6, 'Bacon!');
// list.print();
// list.insert(5, 'FIIIIVE');
// list.print();
// list.remove(5);
// list.reverse();
// list.print();