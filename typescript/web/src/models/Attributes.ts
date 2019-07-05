export class Attributes<T> {
	constructor(private data: T) {}
	//K extends T returning T[K] means get will only be able to get a property of T.
	//Super dynamic and massive in brilliance!!
	get<K extends keyof T>(key: K): T[K] {
		return this.data[key];
	}

	set(update: T): void {
		Object.assign(this.data, update);
	}
}
