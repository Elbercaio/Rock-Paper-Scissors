function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function gameResult(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      return "You Win! Rock beats Scissors";
    } else {
      return "Draw! Try Again";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "paper") {
      return "Draw! Try Again";
    } else if (computerSelection === "scissors") {
      return "You Lose! Scissors beats Paper";
    } else {
      return "You Win! Paper beats Rock";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "You Win! Scissors beats Paper";
    } else if (computerSelection === "scissors") {
      return "Draw! Try Again";
    } else {
      return "You Lose! Rock beats Scissors";
    }
  } else {
    return "Choose a valid option!";
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
