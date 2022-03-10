function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You Lose the Round! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      return "You Win the Round! Rock beats Scissors";
    } else {
      return "Draw! Better Luck Next Round";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "paper") {
      return "Draw! Better Luck Next Round";
    } else if (computerSelection === "scissors") {
      return "You Lose the Round! Scissors beats Paper";
    } else {
      return "You Win the Round! Paper beats Rock";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "You Win the Round! Scissors beats Paper";
    } else if (computerSelection === "scissors") {
      return "Draw! Better Luck Next Round";
    } else {
      return "You Lose the Round! Rock beats Scissors";
    }
  } else {
    return "Choose a valid option!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Please enter your answer: ");
    round = playRound(playerSelection, computerPlay());
    console.log(round);
    if (round.includes("Win")) {
      playerScore++;
    } else if (round.includes("Lose")) {
      computerScore++;
    }
    console.log(
      `Player: ${playerScore} x Computer: ${computerScore}`
    );
  }
  if (playerScore > computerScore) {
    console.log("You won against the machine!");
  } else if (playerScore < computerScore) {
    console.log("You lost against the machine. Shame!");
  } else {
    console.log("An Overall Draw, unlucky");
  }
}

game()
