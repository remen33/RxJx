// ExhaustMap mantiene solo una subscription activa y dicha subscripton debe completarse para
// agregar una nueva. 
// Muy util cuando tenemos objetos que estan emitiendo muchos valores
// en un formulario que se envia submit con la tecla Enter y podria causa problemas
// si se ejecuta varias veces como doble submit.

import { interval, take, fromEvent, switchMap, concatMap, exhaustMap } from 'rxjs';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    exhaustMap( () => interval$)
)
.subscribe( console.log );