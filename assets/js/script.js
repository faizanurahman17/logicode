const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
h1.addEventListener('click', colorChange);

let onbtn = false;
function colorChange() {
    onbtn = !onbtn;
    if (onbtn) {
        h1.style.color = "white";
        p.style.color = "white";
        body.style.background = "black";
    } else {
        h1.style.color = "";
        p.style.color = "";
        body.style.background = "";
    }
}
