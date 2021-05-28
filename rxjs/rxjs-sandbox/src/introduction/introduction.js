import { Observable } from 'rxjs';
function doSomethingToData(data) {
	const observable$ = new Observable((subscriber) => {
		setInterval(() => {
			subscriber.next(`Here we define what to do with data: -> ${data}`);
			subscriber.next(`Lets do something else with data: -> ${data}`);
		}, 1000);
		//complete unsubscribes
		//subscriber.complete();
	});
	return observable$;
}
const observer = {
	next: (value) => console.log('Here we observe what the subscriber does: -> ' + value),
	error: (err) => console.log('SAMO ERROR: ' + err),
};
const subscription = doSomethingToData('this is data riding the stream').subscribe(observer);
//this also unsubscribes
setTimeout(() => subscription.unsubscribe(), 3000);

const syncEmission$ = new Observable((subscriber) => {
	subscriber.next('Alice');
	subscriber.complete();
});
syncEmission$.subscribe((valueEmitted) => {
	console.log(`Z value emitted is  ..... ${valueEmitted}`);
});
const asyncEmission$ = new Observable((subscriber) => {
	subscriber.next('Alice');
	setTimeout(() => {
		console.log('Samo');
		subscriber.next('SAMO!!');
		subscriber.error(new Error('HELP!!!!'));
	}, 1000);
	return () => {
		console.log('Tear Down Logic Here');
	};
});
asyncEmission$.subscribe({
	next: (valueEmitted) => {
		console.log(`Z value emitted is  ..... ${valueEmitted}`);
	},
	error: (err) => console.log(`Error: ${err.message}`),
	complete: () => console.log('complete'),
});

const emitIntervals$ = new Observable((subscriber) => {
	let counter = 0;
	const interval = setInterval(() => subscriber.next(++counter), 500);
	return () => {
		//teardown logic
		console.log('clearing interval');
		clearInterval(interval);
	};
});
const subscription2 = emitIntervals$.subscribe((v) => console.log(v));
setTimeout(() => subscription2.unsubscribe(), 7000);
