interface Vehicle {
	name: string;
	year: Date;
	broken: boolean;
	summary(): string;
}
interface Reportable {
	summary(): string;
}
const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary() {
		return `what a great civic, it is broken ${this.broken}?`;
	},
};
const hotDrink = {
	name: 'coffee',
	summary() {
		return `i <3 ${this.name}`;
	},
};

const printVehicle = (vehicle: { name: string; year: number; broken: boolean }) => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken: ${vehicle.broken}`);
};
const printVehicleUsingIntercae = (vehicle: Vehicle) => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken: ${vehicle.broken}`);
	console.log(`Summary: ${vehicle.summary()}`);
};
const printSummary = (item: Reportable) => {
	console.log(`Summary: ${item.summary()}`);
};
printVehicleUsingIntercae(oldCivic);
printSummary(oldCivic);
printSummary(hotDrink);
