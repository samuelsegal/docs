const person = {
	name: 'samo',
	sings() {
		console.log(`sings.this`, this);
		var singsSinger = function() {
			//in here this is window due to its lexical environment
			console.log(`singsSinger.this`, this);
		};

		var passthisin = function(t) {
			//passing this in kinda help
			console.log(`passthisinnotwork.this`, t);
		};

		var singsArrowHead = () => {
			//however arrow functions are lexically bound, so this is as is expected.
			console.log(`singsArrowHead.this`, this);
		};

		var self = this;
		var selfishway = function() {
			console.log(`selfishway.this`, self);
		};

		//demonstrate the definition of this for each function
		//this: window
		singsSinger();
		//this: person
		passthisin(this);
		//this: person (es6 preferred style)
		singsArrowHead();
		//hold on to a reference
		selfishway();

		//the below function can be called using ()()
		var bindSolution = function() {
			//b4 arrow functions we would bind the function and call using ()() i.e. obj.sing()();
			console.log(`bindSolution.this requires ()()`, this);
		};
		return bindSolution.bind(this);
	},
};

person.sings()();
