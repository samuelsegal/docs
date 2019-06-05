//IIFE -Immediately Invoked Function Expression
(function() {
	var variableNoLongerGlobal = 'Yay!!';
	console.log('Im in my own module 0 Old School');
})();
var globalVariable = 'GLOBAL';

//Use closure to accept a global variable to protect it from being modified within closure
var module = (function(globalVariable) {
	globalVariable = 'No longer Global';
	var variableNoLongerGlobal = 'Yippie!!';
	function printVariable(variable) {
		if (variable == undefined) {
			console.log(variableNoLongerGlobal);
		} else {
			console.log(variable);
		}
	}
	console.log(globalVariable);
	return {
		printVariable: printVariable,
	};
})(globalVariable);
module.printVariable();
console.log(globalVariable);
