import { endWith, of, pipe, startWith } from 'rxjs';
const number$ = of(1, 2, 3).pipe(
  startWith('a', 'b', 'c'),
  endWith('x', 'y', 'z')
);

number$.subscribe(console.log);
