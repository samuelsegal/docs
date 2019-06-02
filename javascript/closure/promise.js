const p2 = new Promise((resolve, reject) => {
	setTimeout(function() {
		console.log('do some stuff in 2 seconds');
		resolve('p2 is done');
	}, 2000);
});
const p3 = new Promise((resolve, reject) => {
	setTimeout(function() {
		console.log('did something in 3 secs');
		resolve('p3 is done son');
	}, 3000);
});
const p4 = new Promise(resolve => {
	resolve('thank you');
});
const p5 = new Promise((resolve, reject) => {
	if (true) {
		resolve('resolved');
	} else {
	}
	reject('REJECTED!');
});
Promise.all([p2, p3, p4, p5])
	.then(values => {
		console.log(values);
	})
	.catch(error => {
		console.log('error');
	});
