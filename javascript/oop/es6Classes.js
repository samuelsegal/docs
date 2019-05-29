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

const tricky = new Human('Tricky', 'full of trickery');
console.log(tricky.think());
console.log(tricky instanceof Human);

class Asian extends Human {
	constructor(name, brain, language) {
		super(name, brain);
		this.language = language;
	}
	think() {
		return `${super.think()}.\nMy language of choice is  ${this.language}`;
	}
}

const ybing = new Asian('Ybing', 'Asian', 'Mandarin');
console.log(ybing.think());
console.log(Human.prototype.isPrototypeOf(ybing));
console.log(`Ybing is an Asian Human Object: ${ybing instanceof (Asian && Human && Object)}`);
