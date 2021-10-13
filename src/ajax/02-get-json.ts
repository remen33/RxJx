import { ajax } from "rxjs/ajax";


const url  = 'https://httpbin.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';

const observable$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
});

observable$.subscribe(data => console.log('data:', data));