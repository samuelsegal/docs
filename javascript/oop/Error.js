// try {
// 	console.log('Yeeeehawww');
// 	try {
// 		thowAnErrorIDoNotExist();
// 	} catch (err) {
// 		throw new Error(err);
// 	} finally {
// 		console.log('Inner Finals');
// 	}
// 	console.log('what happened to the captain?');
// } catch (err) {
// 	console.log(err);
// } finally {
// 	console.log('Finally once and for all');
// }

// Promise.resolve('promising the world a rose')
// 	.then(res => {
// 		throw new Error('We brok our Asynchronous Promise');
// 		return res;
// 	})
// 	.then(res => {
// 		console.log(res);
// 	})
// 	.catch(err => console.log(err));

Promise.resolve('promising the world a rose')
	.then(res => {
		// Promise.resolve().then(() => {
		// 	throw new Error('Inner Promise');
		// });
		Promise.resolve()
			.then(() => {
				throw new Error('Better Promise');
			})
			.catch(err => {
				console.log(err);
			});
		//throw new Error('We broke our Asynchronous Promise');
		console.log(res);
		return res;
	})
	.then(res => {
		console.log(res);
	})
	.catch(err => console.log(err));
