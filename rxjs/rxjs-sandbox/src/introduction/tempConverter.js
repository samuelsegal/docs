import { combineLatest, fromEvent } from 'rxjs';

const tempInput = document.getElementById('temperature-input');
const conversion = document.getElementById('conversion-dropdown');
const resultText = document.getElementById('result-text');

const temp$ = fromEvent(tempInput, 'input');
const conversion$ = fromEvent(conversion, 'input');
combineLatest([temp$, conversion$]).subscribe({
	next: ([tempInputEvent, conversionInputEvent]) => {
		const temp = tempInputEvent.target.value;
		console.log(typeof temp);
		console.log(temp);
		if (isNaN(temp)) {
			//throw new Error('Please Input A Number');
			alert('Please Input numbers only!');
		}

		const conversion = conversionInputEvent.target.value;

		const result = 'f-to-c' === conversion ? ((temp - 32) * 5) / 9 : (temp * 9) / 5 + 32;
		resultText.innerText = result;
		console.log(tempInputEvent.target.value);
		console.log(conversionInputEvent.target.value);
	},
	error: (msg) => alert(msg),
	complete: () => console.log('complete'),
});
