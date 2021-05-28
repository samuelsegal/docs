import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

const baseBallArticle = {
	category: 'sports',
	content: 'strike 1 sucka',
};
const bizArticle = {
	category: 'business',
	content: 'boring',
};
const boatArticle = {
	category: 'sports',
	content: 'yippie!!',
};

const newsFeed$ = new Observable((subscriber) => {
	setTimeout(() => subscriber.next(baseBallArticle), 1000);
	setTimeout(() => subscriber.next(bizArticle), 2000);
	setTimeout(() => subscriber.next(boatArticle), 3000);
});

newsFeed$.pipe(filter((item) => item.category === 'sports')).subscribe((data) => console.log(data));


/**
 * catchError
 */
