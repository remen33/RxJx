import { asyncScheduler } from "rxjs";



const greet = () => console.log('Hi world');
const greet2 = name => console.log(`Hola ${name}`);

// It is like a timer of 2000
// asyncScheduler.schedule(greet, 2000);
// asyncScheduler.schedule(greet2, 2000, 'Emerson');

const subscription = asyncScheduler.schedule(function (state) {
    console.log('state', state);

    this.schedule(state +1, 1000);
}, 3000, 0);


// setTimeout(() => {
//     subscription.unsubscribe();
// }, 6000)


asyncScheduler.schedule( () => 
    subscription.unsubscribe(),
    6000
);