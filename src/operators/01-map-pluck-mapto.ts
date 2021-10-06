import {  fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from 'rxjs/operators';

// range(1,5).pipe(
//  map<number, number>( value => value * 10 )
// )
// .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

const keuypPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('Key press down')
);

keyup$.subscribe( ({ code }) => console.log('subscribe', code));
keyupCode$.subscribe( ( code) => console.log('map', code));
keuypPluck$.subscribe( ( code) => console.log('pluck', code));
keyupMapTo$.subscribe( ( code) => console.log('mapTo', code));
