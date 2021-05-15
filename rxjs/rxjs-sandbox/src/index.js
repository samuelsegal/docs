import { Subject } from 'rxjs';

// step switcher
let switcherValueObservable = (function () {
	let switcherSubject = new Subject();
	let step1 = document.querySelector('.step-one');
	let step2 = document.querySelector('.step-two');
	step1.addEventListener('click', (event) => {
		switcherSubject.next(1);
		step1.classList.add('active');
		step2.classList.remove('active');
	});
	step2.addEventListener('click', (event) => {
		switcherSubject.next(2);
		step1.classList.remove('active');
		step2.classList.add('active');
	});

	return switcherSubject.asObservable();
})();

function createCounter(selector, stepObservable) {
	let counter = 0;
	let step = 1;

	stepObservable.subscribe((value) => (step = value));

	let counterElement = document.querySelector(selector + ' .value');

	setInterval(() => {
		counter = counter + step;
		counterElement.innerHTML = counter;
	}, 1000);
}

createCounter('.counter', switcherValueObservable);
//createCounter('.counter2', switcherValueObservable)
//createCounter('.counter3', switcherValueObservable
