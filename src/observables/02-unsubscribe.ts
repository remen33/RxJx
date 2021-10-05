import { interval, Observable, Observer, Subscriber } from "rxjs";

const observer: Observer<any> = {
    next:  value => console.log('[next]:', value),
    error: error => console.warn('error [obs]:',  error),
    complete: () => console.info('completed [obs]')
};

const interval$ = new Observable<number>( subscriber => {
    let count = 0;
    const interval = setInterval(() => {
        count++
        subscriber.next(count);
        console.log(count);
    }, 1000);


    setTimeout(() => {
        subscriber.complete();
    }, 2500 );

    return () => {
        clearInterval(interval);
        console.log('Interval destroyed');
    }
});

const sub1 = interval$.subscribe(observer);
const sub2 = interval$.subscribe(observer);
const sub3 = interval$.subscribe(observer);

sub1.add(sub2);
sub1.add(sub3);

setTimeout(() => {
     sub1.unsubscribe();

    console.log('Timeout completed')
}, 3000);

//const suscripiton = intervalo$.subscribe( num => console.log('Num:', num));

