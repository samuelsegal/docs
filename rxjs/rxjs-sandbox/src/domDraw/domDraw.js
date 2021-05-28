import { fromEvent } from 'rxjs';
import { take, finalize, tap } from 'rxjs/operators';
import _ from 'lodash';
import './domDraw.css';

/**
 * Draws to the document.body. Created to learn a bit of RxJs
 */
let drawNow = false;

const draw = (x, y) => {
	const el = document.createElement('span');
	el.classList.add('draw-mark');
	el.style.top = y + 'px';
	el.style.left = x + 'px';
	document.body.appendChild(el);
};

const mousedownObserver = {
	next: (e) => {
		drawNow = true;
		draw(e.clientX, e.clientY);
	},
	error: (e) => console.error(e),
	complete: () => console.log('complete'),
};

const mousemoveObservable = fromEvent(document, 'mousemove');
const mouseupObservable = fromEvent(document, 'mouseup');
const mousedownObservable = fromEvent(document, 'mousedown').pipe(
	take(5),
	tap(mousedownObserver),
	finalize(() => {
		console.log('5 attempts to draw have completed, unsubscribing mouseup and move upon downs take of 5');
		let div = document.createElement('div');
		div.innerHTML = '<h2>Finito!</h2>';
		document.body.appendChild(div);
		mousemoveSubscription.add(mousedownSubscription);
		mouseupSubscription.add(mousemoveSubscription);
		mouseupSubscription.unsubscribe();
		//mousemoveSubscription.unsubscribe();
	})
);

const mousemoveObserver = {
	next: (e) => {
		console.log('dsfbsdfb');
		if (drawNow) draw(e.clientX, e.clientY);
	},
	error: (e) => console.error(e),
	complete: () =>
		console.log('mouse move has completed, however unsubscribe does not trigger this? Still learning... fun stuff'),
};

const mousedownSubscription = mousedownObservable.subscribe();
const mouseupSubscription = mouseupObservable.subscribe((e) => (drawNow = false));
const mousemoveSubscription = mousemoveObservable.subscribe(mousemoveObserver);
//mousedownSubscription.add(mouseupSubscription);
//mousemoveSubscription.add(mousedownSubscription);
setTimeout((e) => {
	/* 	
	mousedownObserver.complete();
	mousemoveObserver.complete();
	mousemoveObserver.error('asdfvaevdf');
	mousemoveSubscription.unsubscribe(); */
}, 5000);
