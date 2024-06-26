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



// const rock = document.querySelector('.rock-button');
// const paper = document.querySelector('.paper-button');
// const scissors = document.querySelector('.scissors-button');

// let humanChoice = document.querySelector('input');

const rockButton = document.querySelector('.rock-button');

const paperButton = document.querySelector('.paper-button'); 

const scissorsButton = document.querySelector('.scissors-button');

rockButton.addEventListener('click', () => {
  playGame('rock');
})

paperButton.addEventListener('click', () => {
  playGame('paper');
})

scissorsButton.addEventListener('click', () => {
  playGame('scissors');
})
let result = document.querySelector('.result');

let humanScore = 0;

let computerScore = 0;


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

function playGame (humanMove) {

  const computerChoice = getComputerChoice();

  if (humanMove === computerChoice) {
    result.textContent = `Computer chose ${computerChoice}, you chose ${humanMove}. Tie. Your score ${humanScore}, Computer score ${computerScore}`;
  } else if (humanMove === 'rock' && computerChoice === 'paper') {
    computerScore ++;
    result.textContent = `Computer chose ${computerChoice}, you chose ${humanMove}. Computer wins. Your score ${humanScore}, Computer score ${computerScore}`;
  } else if (humanMove === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    result.textContent = `Computer chose ${computerChoice}, you chose ${humanMove}. Computer wins. Your score ${humanScore}, Computer score ${computerScore}`;
  } else if (humanMove === 'scissors' && computerChoice === 'paper') {
    humanScore++;
    result.textContent = `Computer chose ${computerChoice}, you chose ${humanMove}. You win. Your score ${humanScore}, Computer score ${computerScore}`;
  } else if (humanMove === 'rock' && computerChoice === 'scissors') {
    humanScore++;
    result.textContent = `Computer chose ${computerChoice}, you chose ${humanMove}. You win. Your score ${humanScore}, Computer score ${computerScore}`;
  } else if (humanMove === 'paper' && computerChoice === 'rock') {
    humanScore++;
    result.textContent = `Computer chose ${computerChoice}, you chose ${humanMove}. You win. Your score ${humanScore}, Computer score ${computerScore}`;
  } else if (humanMove === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    result.textContent = `Computer chose ${computerChoice}, you chose ${humanMove}. Computer wins. Your score ${humanScore}, Computer score ${computerScore}`;
  } else {
    result.textContent = 'ERROR! Make a correct move!'
  }
}

console.log(computerChoice);