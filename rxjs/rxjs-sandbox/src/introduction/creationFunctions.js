import { Observable, of, from, timer, interval, forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, tap } from 'rxjs/operators';
console.log('howdy');

/**
 * of - cold
 */
of('Samo1', 'Samo2', 'Samo3').subscribe({
	next: (e) => console.log(e),
});

function ofRewrite(...args) {
	return new Observable((subscriber) => {
		args.forEach((value) => subscriber.next(value));
		subscriber.complete();
	});
}

ofRewrite('A', 'B', 'C').subscribe({
	next: (v) => console.log(v),
});

/**
 * from - from array or promise or observable
 */
const iou = new Promise((resolve, reject) => {
	resolve('Done Son');
});

const observableFromPromise$ = from(iou).subscribe({ next: (v) => console.log('Next: ' + v) });

/**
 * timer - cold
 */
timer(2000).subscribe({
	next: (v) => console.log(`TIMER: ${v}`),
});

function timerRewrite$(time) {
	return new Observable((subscriber) => {
		const t = setTimeout(() => {
			subscriber.next(`its has been ${time} milli secs`);
			subscriber.complete();
		}, time);
		return () => clearTimeout(t);
	});
}
const timeFUnction = timerRewrite$(1000);
timeFUnction.subscribe({
	next: (v) => {
		console.log(`TimerRewrite : ${v}`);
	},
	complete: () => console.log('Finito'),
});
const sub6 = interval(1000).subscribe({
	next: (v) => console.log(v),
});

/**
 * interval
 */
function intervalRewrite$(time) {
	return new Observable((subscriber) => {
		let counter = 0;
		const t = setInterval(() => {
			subscriber.next(counter++);
		}, time);
		return () => clearInterval(t);
	});
}
const intervalFunction = intervalRewrite$(1000);
const sub5 = intervalFunction.subscribe({
	next: (v) => {
		console.log(`IntervalRewrite : ${v}`);
	},
	complete: () => console.log('Finito'),
});
setTimeout(() => {
	sub5.unsubscribe();
	sub6.unsubscribe();
}, 7000);

/**
 * forkjoin
 */

const randomCannabis$ = ajax('https://random-data-api.com/api/cannabis/random_cannabis').pipe(
	tap((value) => console.log(value)),
	map((jsonResponse) => jsonResponse.response.strain),
	tap((v) => console.log(v))
);
const randomHipsterWord$ = ajax('https://random-data-api.com/api/hipster/random_hipster_stuff');
const randomCryptCoin$ = ajax('https://random-data-api.com/api/crypto_coin/random_crypto_coin');
/* randomCannabis$.subscribe({
	next: (ret) => {
		console.log(`STRAIN :: ${ret.response.strain}`);
	},
}); */

forkJoin([randomCannabis$, randomHipsterWord$, randomCryptCoin$]).subscribe({
	next: ([cannabis, hipster, crypto_coin]) => {
		console.log(`cannabis strain : ${cannabis}`);
		console.log(`hipster word : ${hipster.response.word}`);
		console.log(`crypt coin : ${crypto_coin.response.coin_name}`);
	},
});

forkJoin([randomCannabis$, randomHipsterWord$, randomCryptCoin$]).subscribe({
	next: ([cannabis, hipster, crypto_coin]) => {
		console.log(`cannabis strain : ${cannabis}`);
		console.log(`hipster word : ${hipster.response.word}`);
		console.log(`crypt coin : ${crypto_coin.response.coin_name}`);
	},
});
