/**
 * Cold Observable Example:
 * Each Subscription runs observable logic independently. Produces source of data inside the observable
 */
import { ajax } from 'rxjs/ajax';

const ajax$ = ajax('https://fakerapi.it/api/v1/books?_quantity=1');
ajax$.subscribe((data) => console.log(` Subscription 1 ${data}`));
ajax$.subscribe((data) => console.log(` Subscription 2 ${data}`));
ajax$.subscribe((data) => console.log(` Subscription 3 ${data}`));
