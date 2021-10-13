import { catchError, of, retry } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url  = 'https://httpbinasdfasdf.org/delay/1';

const errorHadler = (response: AjaxError) => {
    console.warn('error: ' , response.message);
    return of({
        ok: false,
        usuarios: []
    });
}

const observable$ = ajax.getJSON(url);

observable$.pipe(
        catchError (errorHadler)
)
.subscribe( {
    next:   value => console.log('next:', value),
    error:   value => console.log('error:', value),
    complete:   () => console.log('completed'),
})

// getJson request information
// Ajax information about request, response, statusCode 
