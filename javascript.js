function getComputerChoice() {
  let ranNum = Math.floor(Math.random() * 3) + 1;

  switch (ranNum) {
    case 1:
      return "ROCK";
    case 2:
      return "PAPER";
    case 3:
      return "SCISSORS";
  }
}

function play() {
  switch (playerSelection) {
    case "ROCK":
      switch (compChoice) {
        case "ROCK":
          return "Draw";
        case "PAPER":
          return "Lose";
        case "SCISSORS":
          return "Win";
      }
    case "PAPER":
      switch (compChoice) {
        case "ROCK":
          return "Win";
        case "PAPER":
          return "Draw";
        case "SCISSORS":
          return "Lose";
      }
    case "SCISSORS":
      switch (compChoice) {
        case "ROCK":
          return "Lose";
        case "PAPER":
          return "Win";
        case "SCISSORS":
          return "Draw";
      }
    default:
      return "Invalid input";
  }
}

const uScore = document.querySelector("#userScore");
const cScore = document.querySelector("#compScore");
const rScore = document.querySelector("#roundNum");
const newGame = document.querySelector("#newGame");
const buttonChoice = document.querySelectorAll(".buttons");
const winName = document.querySelector('#winner');


let userScore = 0;
let compScore = 0;
let rounds = 1;

function resetScore() {
  userScore = 0;
  compScore = 0;
  rounds = 1;
  // Update displayed round count
  uScore.textContent = userScore;
  cScore.textContent = compScore;
  rScore.textContent = rounds;
}

let userScore = 0;
let compScore = 0;
let rounds = 1;

function winner(){
  if(userScore == 5){
    winName.textContent='You Won Last Round'
    alert("You Win")
    resetScore()
    
  }
  else if (compScore == 5){
    winName.textContent='You Lost Last Round'
    alert("You Lost")
    resetScore()
  }
  }

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

   winner()
  

  uScore.textContent = userScore;
  cScore.textContent = compScore;
  rScore.textContent = rounds;
}));




newGame.addEventListener("click", resetScore);



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

  uScore.textContent = userScore;
  cScore.textContent = compScore;
  rScore.textContent = rounds;
}));

newGame.addEventListener("click", resetScore);
