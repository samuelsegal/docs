const profile = {
	name: 'samo',
	age: 20,
	coords: {
		lat: 0,
		lng: 15,
	},
	setAge(age: number): void {
		this.age = age;
	},
};
//Note: ignore the waerning about name, I believe this is due to another variable named name that is perhaps global (such as name declared in lib.dom.d.ts), if we renamed to namer or mano, thered be no warning
let { age, name }: { age: number; name: string } = profile;
age = 3;
console.log(profile);
const {
	coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
