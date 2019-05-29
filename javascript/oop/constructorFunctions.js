//almost as easy as classes for creating objects
function Human(name, brain) {
	this.name = name;
	this.brain = brain;
}

Human.prototype.think = function() {
	return `${this.name} is thinking with a ${this.brain} brain`;
};

const swede = new Human('swede', 'super');
console.log(swede.think());

const american = new Human('american', 'wished and washed');
console.log(american.think());
