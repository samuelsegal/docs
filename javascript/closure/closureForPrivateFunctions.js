var points = (function() {
	var privatePoints = 0;
	function update(val) {
		privatePoints += val;
	}
	return {
		increment: function() {
			update(1);
		},
		incrementBy: function(val) {
			update(val);
		},
		decrement: function() {
			update(-1);
		},
		decrementBy: function(val) {
			update(val);
		},
		value: function() {
			return privatePoints;
		},
	};
})();
console.log(points.value());
points.incrementBy(3);
console.log(points.value());

//Also we can do like below to be able to save points as a function rather than defining pointds as an anonymous function;

var pointSystem = function() {
	var privatePoints = 0;
	function update(val) {
		privatePoints += val;
	}
	return {
		increment: function() {
			update(1);
		},
		incrementBy: function(val) {
			update(val);
		},
		decrement: function() {
			update(-1);
		},
		decrementBy: function(val) {
			update(val);
		},
		value: function() {
			return privatePoints;
		},
	};
};
var redskinsPointSystem = pointSystem();
var cowboysPointSystem = pointSystem();

console.log(`Redskins: ${redskinsPointSystem.value()}`);
console.log(`Cowboys: ${cowboysPointSystem.value()}`);
redskinsPointSystem.decrementBy(49);
cowboysPointSystem.decrementBy(21);

console.log(`Redskins: ${redskinsPointSystem.value()}`);
console.log(`Cowboys: ${cowboysPointSystem.value()}`);
