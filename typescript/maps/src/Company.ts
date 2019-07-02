import faker from 'faker';
import { Mappable } from './Map';

export class Company implements Mappable {
	color: string;
	companyName: string;
	catchPhrase: string;
	location: {
		lat: number;
		lng: number;
	};
	constructor() {
		this.companyName = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}
	markerContent(): string {
		return `
		<div>
			<h1>User name is ${this.companyName}</h1>
			<h3>CatchPhrase: ${this.catchPhrase}</h3>
		</div>
		`;
	}
}
