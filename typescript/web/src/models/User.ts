import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

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
	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update);
	}
}
