import { AxiosPromise, AxiosResponse } from 'axios';
interface ModelAttributes<T> {
	set(value: T): void;
	getAll(): T;
	get<K extends keyof T>(key: K): T[K];
}
interface Sync<T> {
	fetch(id: number): AxiosPromise;
	save(data: T): AxiosPromise;
}
interface Events {
	on(eventName: string, callback: () => void): void;
	trigger(eventName: string): void;
}
interface HasId {
	id?: number;
}
export class Model<T extends HasId> {
	constructor(private attributes: ModelAttributes<T>, private events: Events, private sync: Sync<T>) {}
	//Note: the on method could also have been created using on = this.events.on, similar to get and trigger
	//I left the `get on()` sytnax for reference to both techniques
	get on() {
		return this.events.on;
	}
	get = this.attributes.get;
	trigger = this.events.trigger;
	set(update: T): void {
		this.attributes.set(update);
		this.events.trigger('change');
	}
	fetch(): void {
		const id = this.attributes.get('id');
		if (typeof id !== 'number') {
			throw new Error('There is no id associated with this user. Cannot fetch');
		}
		this.sync.fetch(id).then((response: AxiosResponse) => {
			console.log(`response: `, response.data);
			this.set(response.data);
		});
	}
	save(): void {
		this.sync
			.save(this.attributes.getAll())
			.then(
				(response: AxiosResponse): void => {
					this.trigger('save');
				}
			)
			.catch(() => {
				this.trigger('error');
			});
	}
}
