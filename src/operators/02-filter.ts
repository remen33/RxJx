import { filter, from, fromEvent, map, range } from 'rxjs';

range(1,10).pipe(
filter( (value, i) => {
    console.log('index', i);    
    return value % 2 === 1
})
).subscribe(console.log);

interface Character {
    type: string,
    name: string
}

const character: Character[] = [
    {
        type:'heroe',
        name: 'Batman'
    },
    {
        type:'heroe',
        name: 'Robin'
    },
    {
        type:'villano',
        name: 'Jocker'
    }
]

const charters$ = from(character);

charters$.pipe(
    filter((heroe) => {
        return heroe.type === 'heroe'
    })
).subscribe( (value) => console.log(value.name));

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter( key => key === 'Enter')
);


keyup$.subscribe(console.log);