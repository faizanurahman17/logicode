const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const a = document.querySelector('a');

body.addEventListener('click', colorChange);

let onbtn = false;
function colorChange() {
    onbtn = !onbtn;
    if (onbtn) {
        body.style.color = "white";
        a.style.color = "white";
        body.style.background = "black";
    } else {
        body.style.color = "";
        a.style.color = "";
        body.style.background = "";
    }
}
