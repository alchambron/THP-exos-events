// Fonctionnalité 1 / 1Bis

let foot = document.querySelector('footer');
let count = 0;
foot.addEventListener("click", show);
function show() {
  count++
  console.log("Number of click :" + count)
}

// Fonctionnalité 2

const navbar = document.getElementById('navbarHeader');
const navButton = document.getElementsByClassName('navbar-toggler');
console.log(navButton)


navButton[0].addEventListener("click", toggleNav);
function toggleNav() {
  navbar.classList.toggle("collapse")
}

// Fonctionnalité 3

const cardText = document.getElementsByClassName('card-text')
const editButton = document.getElementsByClassName('btn-outline-secondary')

console.log(cardText)
console.log(editButton)

editButton[0].addEventListener("click", textColor);
function textColor() {
  cardText[0].style.color = "red"
}

// Fonctionnalité 4

editButton[1].addEventListener("click", textCard2Color);
function textCard2Color() {
  if (cardText[1].style.color === "green") { // Have to be done reversly to disable
    cardText[1].style.color = "black" // Posibilty to make it empty to abling every color
  } else {
    cardText[1].style.color = "green"
  }
}

// Fonctionnalité 5

const boostrap = document.getElementsByTagName('link')[0];
const allNavbar = document.getElementsByTagName('header')[0];

allNavbar.addEventListener("dblclick", removeBootstrap);
function removeBootstrap() {
  if (boostrap.disabled === false) {
    boostrap.disabled = true
  } else {
    boostrap.disabled = false
  }
}

// Fonctionnalité 6 

let viewBtn = document.getElementsByClassName('btn btn-sm btn-success');
let cardsText = document.getElementsByClassName('card-text');
let img = document.getElementsByClassName('card-img-top');

for (let i = 0; i < viewBtn.length; i++) {
  viewBtn[i].addEventListener("mousemove", hidecard);
  function hidecard() {
    cardText[i].classList.toggle("d-none")
    img[i].classList.toggle("w-25")
  }
}

// Fonctionnalité 7


