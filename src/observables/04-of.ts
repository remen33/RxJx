import { of } from 'rxjs';

const observable$ = of(...[1,2,3,4,5,6],2,3,4,5);
// const observable$ = of([1,2], {a:1, b:1}, function(){}, true, Promise.resolve());

/// take arguments and generate a secuence 
console.log('Inicio del Observable');
observable$.subscribe(
     next => console.log('next', next),
     null,
     () => console.log('Terminamos la secuencia')
);

console.log('Fin del Observable');