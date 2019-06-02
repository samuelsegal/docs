function holdonto(me) {
	let ransom = 'ransomed: ' + me;
	return function() {
		console.log(ransom);
	};
}
const holder = holdonto('samo');
holder();
holdonto('dummo');
holder();

var add = (function() {
	var counter = 0;
	return function() {
		counter += 1;
		console.log('INSIDE:' + counter);
		return counter;
	};
})();
console.log(add());
console.log(add());
console.log(add());
add();
add();

console.log(add());
