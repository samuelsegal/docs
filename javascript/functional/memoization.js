const loggy = require('../loggy');
function memoizeAdd30(n) {
	//cache object for closure.
	let cache = {};
	//to handle state internal without introducing global variable we can use closure like the following inner function;
	return function(n) {
		if (n in cache) {
			return cache[n];
		} else {
			loggy.bgblue('computing long calculation that should be cached for future calls');
			cache[n] = n + 30;
			return cache[n];
		}
	};
}

const executioner = memoizeAdd30();

loggy.log(executioner(2));
loggy.log(executioner(2));
loggy.log(executioner(2));
loggy.log(executioner(30));
loggy.log(executioner(30));
