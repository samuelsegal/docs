import { fromEvent } from 'rxjs';
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
const mousemoveObservable = fromEvent(document, 'mousemove');
const mousedownObservable = fromEvent(document, 'mousedown');
const mouseupObservable = fromEvent(document, 'mouseup');

const mousedownObserver = {
	next: (e) => {
		drawNow = true;
		draw(e.clientX, e.clientY);
	},
	error: (e) => console.error(e),
	complete: () => console.log('complete'),
};

const mousemoveObserver = {
	next: (e) => {
		if (drawNow) draw(e.clientX, e.clientY);
	},
	error: (e) => console.error(e),
	complete: () => console.log('complete'),
};

const mousedownSubscription = mousedownObservable.subscribe(mousedownObserver);
const mouseupSubscription = mouseupObservable.subscribe((e) => (drawNow = false));
const mousemoveSubscription = mousemoveObservable.subscribe(mousemoveObserver);

setTimeout((e) => {
	mousedownSubscription.add(mouseupSubscription);
	mousemoveSubscription.add(mousedownSubscription);
	mousedownObserver.complete();
	mousemoveObserver.complete();
	mousemoveObserver.error('asdfvaevdf');
	mousemoveSubscription.unsubscribe();
}, 5000);
