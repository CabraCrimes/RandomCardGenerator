/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suit = ["♥", "♠", "♣", "♦"];
  let num = ["A", "J", "Q", "K", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  //Variables for random array elements.
  let suitStyle;
  let numStyle;
  //DOM selectors
  let cardSeed = document.querySelectorAll("#card-seed");
  let cardParentSeed = document.querySelectorAll(".cardClass");

  let randomNumber = Math.floor(Math.random() * 3);
  let cardNumber = Math.floor(Math.random() * 10) * +1;

  suitStyle = suit[randomNumber];
  numStyle = num[cardNumber];
  //Generates new HTML for hearts
  if (suit[0] == suitStyle) {
    cardParentSeed[0].innerHTML = `
    <div id="hearts" class="col d-flex justify-content-start ">${suitStyle}</div>
    <div class="col d-flex justify-content-center align-items-center">${numStyle}</div>
    <div id="hearts" class="col d-flex justify-content-end align-items-end ">${suitStyle}</div>
    `;
  } else {
    cardSeed[0].innerHTML = suitStyle;
    cardSeed[1].innerHTML = numStyle;
    cardSeed[2].innerHTML = suitStyle;
  }

  console.log(suitStyle);
};
