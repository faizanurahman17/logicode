const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const paras = document.querySelectorAll('p');
const img = document.querySelector('img');
const links = document.querySelectorAll('nav a');
const nav = document.querySelector('nav');
const wrapper = document.querySelector('.wrapper');
const contants = document.querySelectorAll('.contants');
const contantLists = document.querySelectorAll('.contants a');
const toggle = document.querySelector('.toggle');



toggle.addEventListener('click', colorChange);

let onbtn = false;
function colorChange() {
    onbtn = !onbtn;
    if (onbtn) {
        img.style.border = "2.5px black solid";
        h1.style.color = "black";
        body.style.background = "whitesmoke";
        nav.style.borderBottom = "1.5px #c8c8c8 solid";
        nav.style.background = "whitesmoke";

        contantLists.forEach(a => {
            a.style.background = "black";
            a.style.color = "whitesmoke";
        });
        contants.forEach(cont => {
            cont.style.border = "1px black solid";
        });
        paras.forEach(p =>{
            p.style.color = "black";
        });
        links.forEach(link => {
            link.style.color = "black";
            link.style.borderBottom = "none";
        });
    } else {
        img.style.border = "";
        h1.style.color = "";
        body.style.background = "";
        nav.style.borderBottom = "";
        nav.style.background = "";

        contantLists.forEach(a => {
            a.style.background = "";
            a.style.color = "";
        });
        contants.forEach(cont => {
            cont.style.border = "";
        });
        paras.forEach(p =>{
            p.style.color = "";
        });
        links.forEach(link => {
            link.style.color = "";
            link.style.borderBottom = "";
        });
    }
}
