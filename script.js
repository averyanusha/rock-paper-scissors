function getComputerChoice () {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 0.3) {
    return 'rock';
  } else if (randomNumber >= 0.3 && randomNumber < 0.6) {
    return 'paper';
  } else if (randomNumber >= 0.6 && randomNumber < 1) {
    return 'scissors';
  }

}

const computerChoice = getComputerChoice ();


// const rock = document.querySelector('.rock-button');
// const paper = document.querySelector('.paper-button');
// const scissors = document.querySelector('.scissors-button');

// let humanChoice = document.querySelector('input');

let button = document.querySelector('.human-choice-button');

let result = document.querySelector('.result');

let humanScore = 0;

let computerScore = 0;

button.addEventListener('click', () => {
  playGame();
})


// function getHumanChoice () {
//   if (humanChoice.value === 'rock') {
//     return 'Rock';
//   } else if (humanChoice.value === 'paper') {
//     return 'Paper';
//   } else if (humanChoice.value === 'scissors') {
//     return 'Scissors';
//   }
// } 

// const humanMove = getHumanChoice();

function playGame () {

  let humanMove = prompt("Please make your move"); 

  if (humanMove.toLowerCase() === computerChoice) {
    result.textContent = `Computer chose ${computerChoice}, you chose ${humanMove.toLowerCase()}. Tie. Your score ${humanScore}, Computer score ${computerScore}`;
  } else if (humanMove.toLowerCase() === 'rock' && computerChoice === 'paper') {
    computerScore ++;
    result.textContent = `Computer chose ${computerChoice}, you chose ${humanMove.toLowerCase()}. Computer wins. Your score ${humanScore}, Computer score ${computerScore}`;
  } else if (humanMove.toLowerCase() === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    result.textContent = `Computer chose ${computerChoice}, you chose ${humanMove.toLowerCase()}. Computer wins. Your score ${humanScore}, Computer score ${computerScore}`;
  } else if (humanMove.toLowerCase() === 'Scissors' && computerChoice === 'paper') {
    humanScore++;
    result.textContent = `Computer chose ${computerChoice}, you chose ${humanMove.toLowerCase()}. You win. Your score ${humanScore}, Computer score ${computerScore}`;
  } else if (humanMove.toLowerCase() === 'Rock' && computerChoice === 'scissors') {
    humanScore++;
    result.textContent = `Computer chose ${computerChoice}, you chose ${humanMove.toLowerCase()}. You win. Your score ${humanScore}, Computer score ${computerScore}`;
  } else if (humanMove.toLowerCase() === 'Paper' && computerChoice === 'rock') {
    humanScore++;
    result.textContent = `Computer chose ${computerChoice}, you chose ${humanMove.toLowerCase()}. You win. Your score ${humanScore}, Computer score ${computerScore} Your score ${humanScore}, Computer score ${computerScore}`;
  } else if (humanMove.toLowerCase() === 'Scissors' && computerChoice === 'rock') {
    computerScore++;
    result.textContent = `Computer chose ${computerChoice}, you chose ${humanMove.toLowerCase()}. Computer wins. Your score ${humanScore}, Computer score ${computerScore}`;
  } else {
    result.textContent = 'ERROR! Make a correct move!'
  }
}



