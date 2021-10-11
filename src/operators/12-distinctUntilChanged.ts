import { distinct, distinctUntilChanged, from, of } from "rxjs";

const numbers$ = of(1,1,1,2,3,3,4,4,4,5,7,1);

numbers$.pipe(
    distinctUntilChanged()
).subscribe(console.log);


interface Character {
    name: string
}

const characters: Character[] = [
    {
        name: 'Megaman'
    },
    {
        name: 'X'
    },
    {
        name: 'Zero'
    },
    {
        name: 'Dr. Willy'
    },
    {
        name: 'Zero'
    },
    {
        name: 'Megaman'
    },   
    {
        name: 'Megaman'
    },
    {
        name: 'Megaman'
    },
    {
        name: 'Megaman'
    },
]

from(characters).pipe(
    distinctUntilChanged((last, current) => last.name === current.name)
).subscribe(console.log);


// {name: 'Megaman'}
// Subscriber.js:123 {name: 'X'}
// Subscriber.js:123 {name: 'Zero'}
// Subscriber.js:123 {name: 'Dr. Willy'}
// Subscriber.js:123 {name: 'Zero'}
// Subscriber.js:123 {name: 'Megaman'}