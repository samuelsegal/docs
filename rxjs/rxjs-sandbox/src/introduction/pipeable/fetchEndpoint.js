import { EMPTY, fromEvent, of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const endpoint = document.getElementById('endpoint');
const fetch = document.getElementById('fetch');

const uri = 'https://fakerapi.it/api/v1';

const fetchEvent$ = fromEvent(fetch, 'click');

fetchEvent$
	.pipe(
		map((e) => `${uri}/${endpoint.value.trim()}`),
		concatMap((value) => {
			return ajax(value).pipe(catchError((e) => EMPTY));
		}),
		map((ret) => ret.response.data)
	)
	.subscribe((value) => console.log(value));
