import { NumbersCollection } from './NumbersCollection';
import { Sorter, SorterWrapper } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
const nums = new NumbersCollection([12, -1]);
const sorter = new SorterWrapper(nums);

const chars = new CharactersCollection('Xa');
const charSorter = new SorterWrapper(chars);

const ll = new LinkedList();
ll.add(-2);
ll.add(9);
ll.add(-400);
ll.add(100);
ll.add(100);
ll.add(100);
ll.add(100);
ll.add(8);
const llSorter = new SorterWrapper(ll);
llSorter.sort();
ll.print();
charSorter.sort();
console.log('CharSorter:', charSorter);
sorter.sort();
console.log('numbre sorter:', sorter);
