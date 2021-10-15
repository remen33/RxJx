import { of, interval, take, delay, forkJoin } from 'rxjs';

const numbers$ = of(1, 2, 3);
const interval$ = interval(1000).pipe(take(3));

const letters$ = of('a', 'b', 'c', 'd').pipe(delay(3500));

// forkJoin({ numbers$, interval$, letters$ }).subscribe((response) => {
//   console.log(response);
// });

forkJoin({
  numbers: numbers$,
  interval: interval$,
  letters: letters$,
}).subscribe((response) => {
  console.log(response);
});
