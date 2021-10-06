import { map, range, tap } from "rxjs";
const number$ = range(1,5);

number$.pipe(
    tap( value => {
        console.log('before', value)        
    }),
    map(val => val * 10),
    tap({
        next: value => console.log('after', value),
        complete: () => console.log('Se termino todo')        
    }),
)
.subscribe((value) => console.log('subs', value));