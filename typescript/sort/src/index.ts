import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
const nums = new NumbersCollection([12, -1]);
const sorter = new Sorter(nums);

const chars = new CharactersCollection('Xa');
const charSorter = new Sorter(chars);

const ll = new LinkedList();
ll.add(-2);
ll.add(9);
ll.add(-400);
ll.add(100);
ll.add(100);
ll.add(100);
ll.add(100);
ll.add(8);
const llSorter = new Sorter(ll);
llSorter.sort();
ll.print();
//charSorter.sort();
//sorter.sort();
