//? makes a property optional
interface UserProps {
	name?: string;
	age?: number;
}
//use void rather than {} as callback is not meant to return anything
type Callback = () => void;
export class User {
	events: { [key: string]: Callback[] } = {};
	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}
	set(update: UserProps): void {
		Object.assign(this.data, update);
	}

	on(eventName: string, callback: Callback): void {
		//inline way of checking of this.events already contains eventName
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}

	trigger(eventName: string): void {
		const handlers = this.events[eventName];
		if (!handlers || handlers.length === 0) {
			return;
		}
		handlers.forEach(callback => {
			callback();
		});
	}
}
