import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
const nums = new NumbersCollection([12, -1]);
const sorter = new Sorter(nums);

const chars = new CharactersCollection('Xa');
const charSorter = new Sorter(chars);
charSorter.sort();
sorter.sort();
