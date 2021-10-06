import { fromEvent, map, tap } from 'rxjs';

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue ante vel nunc dignissim faucibus. Sed venenatis dapibus lectus, non dignissim lectus iaculis ac. Suspendisse ultrices metus ac posuere pellentesque. Vestibulum eget mi vel metus rhoncus pellentesque a sed dui. Praesent placerat lacus sem, sit amet pharetra mauris tincidunt nec. Sed eu nibh turpis. Cras placerat ante ac urna ultrices, ut dignissim quam interdum.
<br/>
<br/>
Donec scelerisque scelerisque volutpat. Aliquam tincidunt elit sit amet enim feugiat scelerisque. Nunc sit amet diam sem. Vivamus eget auctor sapien, nec porta felis. Maecenas vulputate nulla dolor. Nulla vitae lorem at magna efficitur pharetra. Aenean nec volutpat augue. Maecenas a mauris non nisi tempor auctor id at risus. Integer mollis aliquet rhoncus. Nam posuere eros et nisl ornare viverra. In facilisis quam arcu, eget hendrerit ante scelerisque vitae.
<br/>
<br/>
Phasellus in hendrerit orci, non tincidunt nunc. Vivamus velit purus, bibendum vel quam non, egestas porttitor metus. Praesent sem tellus, congue sed pharetra quis, mattis sit amet nisi. Aenean diam odio, cursus imperdiet felis eu, finibus congue purus. Vestibulum at nunc congue, ornare nibh non, porta ligula. Proin mattis lacus at odio laoreet egestas. Fusce tristique nec leo fermentum fringilla. Nullam tristique vel justo non lacinia. Donec aliquam purus eu ex congue tempus. Maecenas non mauris ac dolor ornare molestie. Nullam sed nunc a nibh varius ornare ut quis eros.
<br/>
<br/>
Nullam pharetra nunc ac consectetur gravida. Integer vulputate odio nisl, quis varius libero pellentesque ut. Praesent eleifend velit volutpat, convallis mi in, efficitur ante. In ornare mauris nibh, vitae posuere libero maximus ut. Proin bibendum tincidunt volutpat. Fusce congue dictum accumsan. Nam quis enim nec sapien lacinia congue eu id quam. Nunc non nisi ut mi ultrices euismod id lacinia ante. Etiam blandit malesuada lectus, a condimentum sapien egestas in. Fusce eu leo eu lectus rutrum ultricies. Ut condimentum, neque et pulvinar commodo, massa magna pretium nisl, ac vestibulum ante metus a nisl. Integer auctor aliquam cursus. Sed libero dui, pharetra eu turpis a, laoreet consectetur nunc. Nullam ut egestas lorem. In vitae iaculis sapien. Aenean mollis ex sodales, vulputate enim in, porta nibh.
<br/>
<br/>
Quisque condimentum tortor viverra, condimentum arcu nec, laoreet leo. Donec condimentum turpis lacus, sed tincidunt enim mattis quis. Nulla gravida ultricies ipsum pellentesque maximus. Integer non varius libero, in maximus neque. Maecenas iaculis eros sapien, ac faucibus mauris euismod id. Nullam fringilla malesuada viverra. In aliquet ullamcorper egestas. Sed ipsum nibh, auctor vitae orci in, volutpat consectetur felis. Phasellus gravida, lorem in sodales commodo, ex orci ultricies nunc, sit amet sagittis lectus urna non dui. Sed sed dolor quis libero mattis mollis vitae sed quam. Aenean molestie egestas dolor, sit amet bibendum dui suscipit vel. Curabitur fermentum ornare tempus. Sed posuere, neque ac ultrices laoreet, massa erat iaculis nibh, vel luctus lectus lorem sed mi. Nullam pretium, ipsum ut tincidunt placerat, nunc tellus sollicitudin felis, id tempus velit orci sit amet velit.
`;

const body = document.querySelector('body');
body.append(text);


const progressBar = document.createElement('div');
progressBar.classList.add('progress-bar');

body.append(progressBar);

// create a function 
const pertageScroll = (event) => {
 
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    console.log({ scrollTop,
        scrollHeight,
        clientHeight});

     return (scrollTop/ (scrollHeight - clientHeight)) * 100;
};

/// Streams

const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map( pertageScroll),
    tap( console.log)
);


progress$.subscribe( percentage => {
    progressBar.style.width = `${percentage}%`;
});