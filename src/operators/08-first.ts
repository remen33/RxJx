import { first, fromEvent, map, take, tap } from 'rxjs';

const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    tap(console.log),
    map<MouseEvent,any>(({clientY, clientX}) => ({ 
        clientY, clientX
    })),
    first(event => event.clientY > 150),
)
.subscribe({
    next: value => console.log('next', value),
    complete: () => console.log('Completed')
});