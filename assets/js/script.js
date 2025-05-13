const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const img = document.querySelector('img');

body.addEventListener('click', colorChange);

let onbtn = false;
function colorChange() {
    onbtn = !onbtn;
    if (onbtn) {
        img.style.border = "2.5px black solid";
        h1.style.color = "black";
        p.style.color = "black";
        body.style.background = "whitesmoke";
    } else {
        img.style.border = "";
        h1.style.color = "";
        p.style.color = "";
        body.style.background = "";
    }
}
