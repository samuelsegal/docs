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
