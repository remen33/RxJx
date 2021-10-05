import { asyncScheduler, range } from 'rxjs';

//  const src$ = range(1,5);
//  const src$ = range(-5,10);
 const src$ = range(1 ,5, asyncScheduler);


 console.log('inicio');
 src$.subscribe( console.log);
 console.log('fin');