import { Observable } from 'rxjs';
import { load } from './loader';


let output = document.getElementById("output");
let button = document.getElementById("button");
let click = Observable.fromEvent(button, "click")
// .map((e: MouseEvent) => {
//     return {
//         X: e.clientX,
//         Y: e.clientY
//     }
// })
// .filter(value => value.X < 500)
// .delay(250);

// function onNext(value) {
//     circle.style.left = value.X;
//     circle.style.top = value.Y;
// }


function renderMovies(movies) {
    movies.forEach(element => {
        let div = document.createElement("div");
        div.innerText = element.title;
        output.appendChild(div);
    });
}

// click.map(e => load("movies.json"))
//     .subscribe(o => console.log(o));

click.flatMap(e => load("movies.json"))
    .subscribe(
    renderMovies,
    // e => load("movies.json"),
    // value => console.log(value),
    e => console.log(`error :${e}`),
    () => console.log("complete")
    );
