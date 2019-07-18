import { Sort } from './Sort';
import { BubbleSort } from './BubbleSort';
export class AllSorts {
	sortsArr: Sort[] = [];
	push = (sort: Sort): void => {
		this.sortsArr.push(sort);
	};
	getAllOfType = (sortType): Sort[] => {
		const ret = [];
		this.sortsArr.forEach(sort => {
			if (sort instanceof sortType) {
				ret.push(sort);
			}
		});
		return ret;
	};
}
