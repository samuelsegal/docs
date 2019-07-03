import { NumbersCollection } from './NumbersCollection';
import { Sorter, SorterWrapper } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

//For demonstration we will use the different techiques

//Firs useet the version that inherits Sorter
const nums = new NumbersCollection([12, -1]);
nums.sort();
console.log('numbre sorter:', nums);

const chars = new CharactersCollection('Xa');
const charSorter = new SorterWrapper(chars);
charSorter.sort();
console.log('CharSorter:', charSorter);

const ll = new LinkedList();
ll.add(-2);
ll.add(9);
ll.add(-400);
ll.add(100);
ll.add(100);
ll.add(100);
ll.add(100);
ll.add(8);
//using extended sort function
ll.sort();

//used as a sortable argument to a sorterwrapper
//const llSorter = new SorterWrapper(ll);
//llSorter.sort();
ll.print();
