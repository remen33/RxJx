import { interval, reduce, take, tap } from 'rxjs';
const numbers = [1,2,3,4,5,6]

const totalReducer = (accumulator:  number, currentValue: number) => {
    return  accumulator + currentValue;
}

const total = numbers.reduce(totalReducer,0);
console.log('total arr', total);

const otherway = numbers.reduce((acc, value) => acc+ value,0);
console.log('total other way', otherway);

interval(1000).pipe(
    take(3),
    tap(console.log),
    reduce(totalReducer)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});