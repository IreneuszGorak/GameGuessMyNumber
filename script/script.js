"use strict";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let secretNumber=getRandomIntInclusive(1,20);
let score=20;
let highscore=0;

// document.querySelector('.score').textContent = '5';
// document.querySelector('.highscore').textContent = '35';
// document.querySelector('.info-panel').textContent = 'Sialala';


// checking the enetered value

document.querySelector('.game-values__player-btn-check').addEventListener('click', function () {

let checkNumber=Number((document.querySelector('.game-values__player-input').value));

if  (checkNumber>0 && checkNumber<21) {

    //winning
    if (checkNumber===secretNumber) { 
      document.querySelector('.info-panel').textContent = 'Congratulations !';
      document.querySelector('.title-container__secret-number').textContent = secretNumber;
      score > highscore ? document.querySelector('.highscore').textContent = score : '';
      document.querySelector('body').style.backgroundColor = '#60b347';

    //wrong number
    } else {

      checkNumber > secretNumber  ?     
      document.querySelector('.info-panel').textContent = ' Number too high' : 
      document.querySelector('.info-panel').textContent = ' Number too low'; 
      score--;
      document.querySelector('.score').textContent = score;

    };

    //not number
  } else {
    document.querySelector('.info-panel').textContent = '⛔️ No number!';

  };

});

// again 
document.querySelector('.again').addEventListener('click', function () {
  secretNumber=getRandomIntInclusive(1,20);
  document.querySelector('.info-panel').textContent = 'Start guessing ...';
  score=20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#112240';
  document.querySelector('.game-values__player-input').value=0;
  document.querySelector('.title-container__secret-number').textContent = '?';

});