import { fromEvent, interval, map, pipe, take, takeUntil } from 'rxjs';
import { merge, mergeMap, of } from 'rxjs';

const letter$ = of('a', 'b', 'c');

letter$.pipe(
    mergeMap((letter) => interval(1000).pipe(
        take(3)
    ))
)
// .subscribe(
//     {
//         next: value => console.log('next: ', value),
//         complete: () => console.log('complete'),
//     }
// );

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseuown');
const interval$ = interval();

mousedown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseup$)
    ))
)
.subscribe( console.log);