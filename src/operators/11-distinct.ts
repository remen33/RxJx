import { distinct, from, of } from "rxjs";

const numbers$ = of(1,1,1,2,3,3,4,4,4,5,7,1);

numbers$.pipe(
    distinct()
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
        name: 'zero'
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
    distinct((character) => character.name)
).subscribe(console.log);