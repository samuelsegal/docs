class Vehicle {
	//protected color: string;
	constructor(private color: string) {
		this.color = color;
	}
	public drive(): void {
		this.log('varoomrooom');
	}
	public honk(): void {
		console.log('beep');
	}
	public getColor(): string {
		return this.color;
	}
	protected log(msg: string): void {
		this.innerLog(msg);
	}
	private innerLog(msg: string): void {
		console.log(msg);
	}
}
const jeep = new Vehicle('white');
jeep.drive();
jeep.honk();
console.log(jeep.getColor());
class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}
	public drive(): void {
		console.error('Chugga Chugga');
		this.log('howdy');
	}
}
const car = new Car(2, 'red');
car.drive();
car.honk();
const vehicle = new Vehicle('blu');
vehicle.drive();
vehicle.honk();
