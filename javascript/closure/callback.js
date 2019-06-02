//callback
function finito() {
	console.log('el fin');
}

//parent function that accetps and returns callback
function increment(num, callback) {
	for (let i = 0; i < num; i++) {
		console.log(i);
	}
	return callback();
}

//call the function passing in custom callback
increment(20, finito);
