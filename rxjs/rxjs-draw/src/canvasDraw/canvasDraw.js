import { combineLatest, fromEvent, merge } from 'rxjs';
import { combineLatestWith, filter, map } from 'rxjs/operators';
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
const dragDownObservable$ = clickMoveObservable$.pipe(filter(({ clickType }) => clickType === 'mousedown'));
dragDownObservable$.subscribe({
	next: ({ clickType, position }) => {
		const { x, y } = position;
		context.lineTo(x, y);
		//context.moveTo(x, y);
		context.stroke();
		context.moveTo(x, y);
	},
});
mousedownObservable$.subscribe({
	next: ({ position }) => {
		const { x, y } = position;
		//context.moveTo(x, y);
		//context.stroke();
	},
});

mouseupObservable$.subscribe({
	next: ({ position }) => {
		//console.log(position);
		//context.stroke();
	},
});
