import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
const slider = document.querySelector('input#slider');
const sliderResult = document.getElementById('slider-result');
console.log(slider);

fromEvent(slider, 'input')
	.pipe(
		debounceTime,
		map((e) => e.target.value)
	)
	.subscribe((e) => {
		next: {
			console.log(e);
			sliderResult.innerHTML = e;
		}
	});
