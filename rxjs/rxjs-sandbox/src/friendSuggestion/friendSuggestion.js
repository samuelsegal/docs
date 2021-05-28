/* import { Observable, of, from, timer } from 'rxjs';
import { map, mergeMap, takeUntil } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';

const requestStream = of('https://api.github.com/users');

const subscription1 = requestStream.subscribe(async (requestUrl) => {
	const response = await fetch(requestUrl);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const friend = await response.json();
	console.log(friend);
});
subscription1.unsubscribe();
const uri = 'https://api.github.com/users';

//doesnt work
const observable = from(fetch(uri)).pipe(map((response) => response.json()));
const subscription = observable.subscribe({
	next: (value) => console.log('val: ' + value.toSring()),
	error: (err) => console.log(err),
	complete: () => console.log('done'),
});
subscription.unsubscribe();

fromFetch(uri)
	.pipe(
		mergeMap((response) => response.text()),
		takeUntil(timer(5e3))
	)
	.subscribe((text) => console.log('TEXT: ' + text));
 */
