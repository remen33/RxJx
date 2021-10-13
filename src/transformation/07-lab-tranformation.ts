import { catchError, exhaustMap, of, switchMap } from 'rxjs';
import { fromEvent, map, mergeMap, pluck, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// helper
const loginHttpRequest = (userInformation) =>
  ajax.post('https://reqres.in/api/login?delay=1', userInformation).pipe(
    pluck('response', 'token'),
    catchError((error) => of({}))
  );

// create form
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const btnSubmit = document.createElement('button');

// Configurations
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';

btnSubmit.innerHTML = 'Ingresar';
form.append(inputEmail, inputPassword, btnSubmit);

document.querySelector('body').append(form);

const submitForm$ = fromEvent(form, 'submit').pipe(
  tap((event) => event.preventDefault()),
  map((event) => ({
    email: event.target[0].value,
    password: event.target[1].value,
  })),
  //   switchMap(loginHttpRequest)
  exhaustMap(loginHttpRequest)
);

submitForm$.subscribe((token) => {
  console.log(token);
});
