const l = require('./loggy');
//Inheritance
//All Humans inherit attack functionality
class Human {
	constructor(name, brain) {
		this.name = name;
		this.brain = brain;
	}
	attack(enemy) {
		return `${this.name} inheritly attacks ${enemy.name}, always ready for a battle`;
	}
}

//Composition
//decide which humans we want to have attack powers

function ComposedHumanAsAttacker(name, brain) {
	let human = {
		name,
		brain,
	};
	return getAttackableHuman(human);
}
function getAttackableHuman(human) {
	return Object.assign({}, human, {
		attackFunction: enemy => {
			return `${human.name} is composed and attacks ${enemy.name} when he feels the need`;
		},
	});
}
/*  Let the legends battle - the win depends on decision of 
 *  A: should we inherit the ability to attack(attack is a tightly coupled feature. ALL humans will inherit this)
    OR
    B: composed, will not always have there attack function ready, only when needed (more flexible, less strict on what a human can do)
 *  or should we be composed with this ability
 **/
let dave = new ComposedHumanAsAttacker('David Byrne', 'brilliant');
let syd = new Human('Syd Barret', 'shiny');
l.bgblue(dave.attackFunction(syd));
l.bgRed(syd.attack(dave));
