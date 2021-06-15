import { combineLatest, fromEvent, merge } from 'rxjs';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { combineLatestWith, filter, map } from 'rxjs/operators';
/**
 * TODO: these need to be subjects that emit data to many subscribers.
 * super simple, jut check your todos and doit foo.
 * of course also mixed with streaming data type from server
 * via events of data creation, super simple. just do it.
 * these need to update message broker or whatever server with draw points an
 * actions. those then send SSE or streaming whatever to clients
 * which should be alot like these. So after monte carlos at the lenadings
 * you need to land into just doing this and erasing this message once done.
 */
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

const getMousePosition = (canvas, event) => {
	const rect = canvas.getBoundingClientRect();
	return {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top,
	};
};
const mousedownObservable$ = fromEvent(canvas, 'mousedown').pipe(
	map((e) => ({
		clickType: 'mousedown',
		position: getMousePosition(canvas, e),
	}))
);
const mouseupObservable$ = fromEvent(canvas, 'mouseup').pipe(
	map((e) => ({
		clickType: 'mouseup',
		position: getMousePosition(canvas, e),
	}))
);
const mousemoveObservable$ = fromEvent(canvas, 'mousemove').pipe(map((e) => getMousePosition(canvas, e)));

const mouseClicksObservable$ = merge(mousedownObservable$, mouseupObservable$);

const clickMoveObservable$ = mouseClicksObservable$.pipe(
	combineLatestWith(mousemoveObservable$, ({ clickType }, position) => {
		return { clickType, position };
	})
);
const dragDownObservable$ = clickMoveObservable$.pipe(filter(({ clickType }) => clickType == 'mousedown'));
let isUp = false;
dragDownObservable$.subscribe({
	next: ({ clickType, position }) => {
		console.log(clickType);
		const { x, y } = position;
		//isUp is a side effect mus revisit
		//on initial
		if (!isUp) {
			context.lineTo(x, y);
		} else {
			isUp = false;
		}
		context.moveTo(x, y);
		context.stroke();
	},
});
mousedownObservable$.subscribe({
	next: ({ position }) => {
		const { x, y } = position;
		context.beginPath();
	},
});

mouseupObservable$.subscribe({
	next: ({ position }) => {
		context.closePath();
		isUp = true;
		context.stroke();
	},
});
