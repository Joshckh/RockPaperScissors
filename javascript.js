function getComputerChoice() {
  let ranNum = Math.floor(Math.random() * 3) + 1;

  switch (ranNum) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function play() {
  switch (playerSelection) {
    case "rock":
      switch (compChoice) {
        case "rock":
          return "Draw";
        case "paper":
          return "Lose";
        case "scissors":
          return "Win";
      }
    case "paper":
      switch (compChoice) {
        case "rock":
          return "Win";
        case "paper":
          return "Draw";
        case "scissors":
          return "Lose";
      }
    case "scissors":
      switch (compChoice) {
        case "rock":
          return "Lose";
        case "paper":
          return "Win";
        case "scissors":
          return "Draw";
      }
    default:
      return "Invalid input";
  }
}

function resetScore() {
  userScore = 0;
  compScore = 0;
  rounds = 1;
  // Update displayed round count
  rScore.textContent = rounds;
}

let userScore = 0;
let compScore = 0;
let rounds = 1;

const uScore = document.querySelector("#userScore");
const cScore = document.querySelector("#compScore");
const rScore = document.querySelector("#roundNum");
const newGame = document.querySelector("#newGame");
const buttonChoice = document.querySelectorAll(".buttons");

buttonChoice.forEach(button => button.addEventListener("click", () => {
  playerSelection = button.textContent;
  compChoice = getComputerChoice();
  result = play();
  if (result === "Win") {
    userScore += 1;
    rounds += 1;
  } else if (result === "Lose") {
    compScore += 1;
    rounds += 1;
  }

  // Update displayed scores and round count
  uScore.textContent = userScore;
  cScore.textContent = compScore;
  rScore.textContent = rounds;
}));

newGame.addEventListener("click", resetScore);
