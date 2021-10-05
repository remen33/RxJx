import { interval, Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next:  value => console.log('[next]:', value),
    error: error => console.warn('error [obs]:',  error),
    complete: () => console.info('completed [obs]')
};

const intervalo$ = new Observable<number>( subscriber => {
   const interval = setInterval( 
       () => subscriber.next( Math.random()), 1000
       );

    return () => {
        clearInterval(interval);
        console.log('Interval destruido');
    };
});

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);


// const subs1 = intervalo$.subscribe(rnd => console.log('subs1',rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2',rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
},3500);