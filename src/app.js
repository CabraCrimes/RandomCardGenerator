/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suit = ["♥", "♠", "♣", "♦"];
  let royal = ["A", "J", "Q", "K", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let suitStyle;

  let cardSeed = document.querySelectorAll("#card-seed");
  let randomNumber = Math.floor(Math.random() * 3);
  let cardNumber = Math.floor(Math.random() * 10) * +1;

  //suitStyle = suit[randomNumber]; suitStyle.style.fontSize = "x-large";

  cardSeed[0].innerHTML = suit[randomNumber];
  cardSeed[1].innerHTML = royal[cardNumber];
  cardSeed[2].innerHTML = suit[randomNumber];
  cardSeed.style.fontSize = "25px";

  console.log(randomNumber);
};
// var span = document.getElementById("span");
// console.log(span);

// span.style.fontSize = "25px";
// span.innerHTML = "String";
