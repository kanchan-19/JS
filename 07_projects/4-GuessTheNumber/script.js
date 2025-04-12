const prevGuess = document.querySelector('#prev-guess');
const remainingGuess = document.querySelector('#remaining-guess');
const submit = document.querySelector('#submit');
const userInput = document.querySelector('#number');
const lowOrHi = document.querySelector('#lowOrHi');
const startOver = document.querySelector('#guess-summary');

let randomNumber = Math.round(Math.random()*100+1);

const p = document.createElement('p');

let previousGuess = [];
let numOfGuess = 1;
let playGame = true;

if(playGame){
  submit.addEventListener('click', function(event){
    event.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number');
  }else if(guess < 1){
    alert('Please enter a number greater than 0');
  }else if(guess > 100){
    alert('Please enter a number less than 101');
  }else{
    previousGuess.push(guess);
    if(numOfGuess === 11){
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`);
    endGame();
  }else if(guess < randomNumber){
    displayMessage(`Number is too low`);
  }else if(guess > randomNumber){
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess){
  userInput.value = '';
  prevGuess.innerHTML += `${guess}, `;
  numOfGuess++;
  remainingGuess.innerHTML = `${11-numOfGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h3 id = "newGame">Start new game</h3>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    randomNumber = Math.round(Math.random()*100+1);
    previousGuess = [];
    numOfGuess = 1;
    prevGuess.innerHTML = '';
    remainingGuess.innerHTML = `${11-numOfGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}