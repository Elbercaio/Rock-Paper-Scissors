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

function reset() {
  document.querySelector("#player").textContent = 0;
  document.querySelector("#computer").textContent = 0;
  document.querySelector("h3").textContent = "";
}

function game() {
  round = playRound(this.id, computerPlay());
  document.querySelector("h3").textContent = round;
  playerScore = parseInt(document.querySelector("#player").textContent);
  computerScore = parseInt(document.querySelector("#computer").textContent);
  console.log(playerScore);
  if (round.includes("Win")) {
    playerScore++;
    document.querySelector("#player").textContent = playerScore;
  } else if (round.includes("Lose")) {
    computerScore++;
    document.querySelector("#computer").textContent = computerScore;
  }
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      alert(
        `${playerScore} X ${computerScore}: You won against the machine. Congrats!`
      );
    } else if (playerScore < computerScore) {
      alert(
        `${playerScore} X ${computerScore}: You lost against the machine. Shame!`
      );
    }
    reset();
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", game);
});
