/**
 * catchError
 */
import { EMPTY, Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, concatMap } from 'rxjs/operators';

const failedHttpRequest$ = ajax('sdfbsfgbsfb');

failedHttpRequest$.pipe(catchError((err) => of('Fallback valueeeeeeeeeeeeeeeeeeeee.......'))).subscribe({
	next: (e) => console.log(e),
	error: (e) => console.log('Found and error :: ', err.message),
	complete: () => console.log('finito'),
});

failedHttpRequest$.pipe(catchError((err) => EMPTY)).subscribe({
	next: (e) => console.log(e),
	error: (e) => console.log('Found and error :: ', err.message),
	complete: () => console.log('finito'),
});

/**
 * concatMap
 */

const concatMapObservable$ = new Observable((subscriber) => {
	setTimeout(() => subscriber.next('A'), 2000);
	setTimeout(() => {
		subscriber.next('B'), subscriber.complete();
	}, 4000);
});

concatMapObservable$.pipe(concatMap((value) => of(value, 1, 23))).subscribe((e) => console.log(e));
