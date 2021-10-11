import { interval, fromEvent, takeUntil, skipUntil, skip, tap } from 'rxjs';

const button = document.createElement('button');
button.innerHTML = 'Stop timer';
document.querySelector('body').append( button);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent( button, 'click')
const clickBtn$ = fromEvent( button, 'click').pipe(
    tap( () => console.log('before skip')),
    skip(1),
    tap( () => console.log('after skip')),
);

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: value => console.log('next', value),
    complete: () => console.log('complete')
});