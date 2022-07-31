"use strict";

//function from MDM web docs 
//https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function infoPanel(message) {
  document.querySelector('.info-panel').textContent = message;
};


let secretNumber=getRandomIntInclusive(1,20);
let score=20;
let highscore=0;


// checking the enetered value

document.querySelector('.game-values__player-btn-check').addEventListener('click', function () {

let checkNumber=Number((document.querySelector('.game-values__player-input').value));

if  (checkNumber>0 && checkNumber<21) {

    //victory
    if (checkNumber===secretNumber) { 
      infoPanel('Congratulations!');
      document.querySelector('.title-container__secret-number').textContent = secretNumber;
      score > highscore ? document.querySelector('.highscore').textContent = score : '';
      document.querySelector('body').style.backgroundColor = '#60b347';

    //wrong number
    } else {

      checkNumber > secretNumber  ?     
      infoPanel('Number too high') : 
      infoPanel('Number too low');
      score--;
      document.querySelector('.score').textContent = score;

    };

    //not number
  } else {
    infoPanel('⛔️ No number!');

  };

});

// again 
  document.querySelector('.again').addEventListener('click', function () {
  secretNumber=getRandomIntInclusive(1,20);
  infoPanel('Start guessing ...');
  score=20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#112240';
  document.querySelector('.game-values__player-input').value=0;
  document.querySelector('.title-container__secret-number').textContent = '?';

});