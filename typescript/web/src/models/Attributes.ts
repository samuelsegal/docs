export class Attributes<T> {
	constructor(private data: T) {}

	/*
	 * get<K extends keyof T>(key: K): T[K]
	 * K extends T returning T[K] means get will only be able to get a property of T.
	 * Super dynamic and massive in brilliance!!
	 * declared as arrow function to bound this to this, so when we pass
	 * this get function as a reference, this.data stays bound to this rather than
	 * to the the new object we pass get to. get it? good 🏌🏼‍♂️
	 */
	get = <K extends keyof T>(key: K): T[K] => {
		return this.data[key];
	};

	set = (update: T): void => {
		Object.assign(this.data, update);
	};
	getAll = (): T => {
		return this.data;
	};
}
