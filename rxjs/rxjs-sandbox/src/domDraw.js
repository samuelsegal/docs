import { fromEvent } from 'rxjs';
import _ from 'lodash';
import './style.css';

let drawNow = false;

const draw = (x, y) => {
	const el = document.createElement('span');
	el.classList.add('draw-mark');
	el.style.top = y + 'px';
	el.style.left = x + 'px';
	document.body.appendChild(el);
};
const mousemove = fromEvent(document, 'mousemove');
const mousedown = fromEvent(document, 'mousedown');
const mouseup = fromEvent(document, 'mouseup');

const onMouseDown = {
	next: (e) => {
		drawNow = true;
		draw(e.clientX, e.clientY);
	},
	error: (e) => console.error(e),
	complete: () => console.log('complete'),
};

const onMouseMove = {
	next: (e) => {
		if (drawNow) draw(e.clientX, e.clientY);
	},
	error: (e) => console.error(e),
	complete: () => console.log('complete'),
};

const mousedownSubscriber = mousedown.subscribe(onMouseDown);
const mouseupSubscriber = mouseup.subscribe((e) => (drawNow = false));
const mousemoveSubscriber = mousemove.subscribe(onMouseMove);

setTimeout((e) => {
	mousedownSubscriber.add(mouseupSubscriber);
	mousemoveSubscriber.add(mousedownSubscriber);
	onMouseDown.complete();
	onMouseMove.complete();
	onMouseMove.error('asdfvaevdf');
	mousemoveSubscriber.unsubscribe();
}, 5000);
