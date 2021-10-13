
import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs/internal/observable/of';
import { catchError, pluck } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

const errorHandler = (response: Response) => {
    if (!response.ok) {
        throw new Error( response.statusText);
    }
}

const catchingError = (error: AjaxError) => {
    console.warn('Error in:', error.message);
    return of([]);
}

// const fetchPromesa = fetch( url);

// fetchPromesa
// .then( errorHandler )
// .then( data => console.log('data:', data))
// .catch(error => console.warn('Error in users', error));

ajax(url)
.pipe(
    pluck('response'),
    //map( response =>  response.response)
    catchError(catchingError)
)
.subscribe( users=> console.log('Users:', users));