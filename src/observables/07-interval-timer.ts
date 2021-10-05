import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
}

const todayIn5 = new Date();
todayIn5.setSeconds(todayIn5.getSeconds() + 5);

const intervale$ = interval(1000);

// emit one value then It completed
// const timer$ = timer(2000);
// const timer$ = timer(2000,1000);
const timer$ = timer(todayIn5);

console.log('inicio');
// intervale$.subscribe(observer );
timer$.subscribe(observer);
console.log('fin');