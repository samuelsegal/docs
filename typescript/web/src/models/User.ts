import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

//? makes a property optional
export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}
const rootUrl = 'http://localhost:3000/users';
//use void rather than {} as callback is not meant to return anything
export class User {
	public events: Eventing = new Eventing();
	public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
	public attributes: Attributes<UserProps>;

	constructor(attrs: UserProps) {
		this.attributes = new Attributes<UserProps>(attrs);
	}
	get on() {
		return this.events.on;
	}
	get get() {
		return this.attributes.get;
	}
	get trigger() {
		return this.events.trigger;
	}
	set(update: UserProps): void {
		this.attributes.set(update);
		this.events.trigger('change');
	}
	fetch(): void {
		const id = this.attributes.get('id');
		if (typeof id !== 'number') {
			throw new Error('There is no id associated with this user. Cannot fetch');
		}
		this.sync.fetch(id).then((response: AxiosResponse) => {
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
