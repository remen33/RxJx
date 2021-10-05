import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next:  value => console.log('[next]:', value),
    error: error => console.warn('error [obs]:',  error),
    complete: () => console.info('completed [obs]')
};

const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');
    subs.next('Hola');
    subs.next('Mundo');

    // const a = undefined;
    // a.name = 'Fernando';
    
    subs.complete();
});

// obs$.subscribe( 
//     value => console.log('next ', value),
//     error => console.warn('error ', error),
//     () => console.info('Completado')
// );


obs$.subscribe(observer);
