import { fromEvent, merge, pluck } from 'rxjs';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';

// const keyup$ = fromEvent(document, 'keyup');
// const click$ = fromEvent(document, 'click');

// combineLatest(keyup$.pipe(pluck('type')), click$.pipe(pluck('type'))).subscribe(
//   console.log
// );

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'emer.tenor@gmail.com';

input2.placeholder = '!@#!@#!@#!@#$';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

const getInputString = (element: HTMLElement) => {
  return fromEvent<KeyboardEvent>(element, 'keyup').pipe(
    pluck('target', 'value')
  );
};
combineLatest([getInputString(input1), getInputString(input2)]).subscribe(
  console.log
);
