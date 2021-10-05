import { from, of } from "rxjs";

const observer = {
    next: value => console.log('next:', value),
    complete: () => console.log('complete')
};

const  myGenerator = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const myIterable = myGenerator();

// for (const iterator of myIterable) {
//     console.log(iterator);    
// }

from(myIterable).subscribe(observer);

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);

//const source$ = from('Fernando');
//Result
// next: F
// next: e
// next: r
// next: n
// next: a
// next: n
// next: d
// next: o
// complete

// const source$ = of('Fernando');
// Result
// next: Fernando

const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(async(response) => {
//     console.log(response.url);
//         const dataResponse = await response.json();
//         console.log(dataResponse);
        
    
// });

