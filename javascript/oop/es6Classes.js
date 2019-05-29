//syntatic sugar - still uses protoypal inheritance, though is enhanced with syntatic sugar to seemlike true OOP
class Human {
	constructor(name, brain) {
		this.name = name;
		this.brain = brain;
	}
	think() {
		return `${this.name} now down with OOP using syntatic sugar and a ${this.brain} brain`;
	}
}

const samo = new Human('Samo', 'souped up');
console.log(samo.think());
console.log(samo instanceof Human);

const trick = new Human('Samo', 'full of trickery');
console.log(trick.think());
console.log(trick instanceof Human);
