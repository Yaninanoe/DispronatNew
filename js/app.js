/*IMAGEN 1*/

let hidebtn = document.getElementById('hide-btn')

let hidenP = document.getElementById('hidenP')

hidebtn.addEventListener('click', masInfo);

function masInfo() {
    hidenP.classList.toggle('show')
}
/*IMAGEN 2*/

let hidebtn1 = document.getElementById('hide-btn1')

let hidenP1 = document.getElementById('hiden1')

hidebtn1.addEventListener('click', masInfo1);

function masInfo1() {
    hidenP1.classList.toggle('show')
}
console.log(masInfo1)
/*IMAGEN 3*/

let hidebtn2 = document.getElementById('hide-btn2')

let hidenP2 = document.getElementById('hiden2')

hidebtn2.addEventListener('click', masInfo2);

function masInfo2() {
    hidenP2.classList.toggle('show')
}

