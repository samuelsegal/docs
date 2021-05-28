import { Observable, of } from 'rxjs';

export const name$ = of('Alice', 'Ben', 'Charlie');

export function storeDataOnServer(data) {
	return new Observable((subscriber) => {
		setTimeout(() => {
			subscriber.next(`Saved successfully: ${data}`);
			subscriber.complete();
		}, 1000);
	});
}

export function storeDataOnServerError(data) {
	return new Observable((subscriber) => {
		setTimeout(() => {
			subscriber.error(new Error('Failure!'));
		}, 1000);
	});
}
