//new binding
function NewPerson(name, brain) {
	this.name = name;
	this.brain = brain;
}
NewPerson.prototype.think = function() {
	console.log(`${this.name} is thinking ${this.brain}`);
};
const newPerson = new NewPerson('noobie', 'new');

//classes bind too
class Human {
	constructor(name, brain) {
		this.name = name;
		this.brain = brain;
	}
	think() {
		console.log(`${this.name} now down with OOP using syntatic sugar and a ${this.brain} brain`);
	}
}

const classyPerson = new Human('Classy', 'souped up');

//implicit binding
const implicitPerson = {
	name: 'implicable',
	brain: 'implicitly and is thyself by default',
	think() {
		console.log(`${this.name} is thinking ${this.brain}`);
	},
};

//explicit binding
const explicitPerson = {
	name: 'explicable',
	brain: 'explicit, i could be anything you want me to be with speed dial access to whom you do bind me',
	think: function() {
		console.log(`${this.name} is *BOUND TO* thinking ${this.brain} and this is a: \n ${this}`);
	}.bind(classyPerson),
};

//arrow functions are lexically scoped, where ever we write it is where this is
const arrowMan = {
	name: 'arrowMan',
	brain: 'like a pointy pointer',
	think: function() {
		var innerFunction = () => {
			console.log(`${this.name} thinks ${this.brain}`);
		};
		return innerFunction();
	},
};

console.log('***********different binding techniques*******');
newPerson.think();
classyPerson.think();
arrowMan.think();
implicitPerson.think();
explicitPerson.think();
