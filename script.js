'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when no input
  if (!guess) {
    document.querySelector('.message').style.color = '#ffec99';
    displayMessage('Hãy nhập số!');

    //when player win
  } else if (guess === secretNumber) {
    displayMessage('Chính xác!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (secretNumber !== guess) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Quá cao!' : 'Quá thấp!');
      score--;
      document.querySelector('.message').style.color = '#ffec99';
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Thua rồi!');
      document.querySelector('.message').style.color = '#fa5252';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Bắt đầu thôi...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').style.color = '#eee';
  document.querySelector('.number').style.width = '15rem';
});
