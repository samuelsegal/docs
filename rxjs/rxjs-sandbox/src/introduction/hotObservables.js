const { Observable, fromEvent, timer } = require('rxjs');

const button = document.querySelector('#but');
console.log(button);

const clickStream$ = new Observable((subscriber) => {
	console.log('executing strream');
	const callbackHandler = (e) => {
		subscriber.next(e);
	};
	button.addEventListener('click', callbackHandler);

	return () => {
		console.log('removing listener');
		button.removeEventListener('click', callbackHandler);
	};
});

const sub1 = clickStream$.subscribe({ next: (v) => console.log(v) });
const sub2 = clickStream$.subscribe({ next: (v) => console.log(v) });
const sub3 = clickStream$.subscribe({ next: (e) => console.log(`x: ${e.x} y: ${e.y}`) });
const sub4 = fromEvent(button, 'click').subscribe({
	next: (e) => console.log(`All hot observables x: ${e.x} y: ${e.y}`),
});

setTimeout(() => {
	sub1.unsubscribe();
	sub2.unsubscribe();
	sub3.unsubscribe();
	//sub4.unsubscribe();
	console.log('DOne');
}, 5000);

