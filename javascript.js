function getComputerChoice() { //to get a either rock paper or scissors//
  let ranNum = Math.floor(Math.random() * 3)+1;

  switch (ranNum) { // pick an outcome
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}

function play(){
  let compChoice = getComputerChoice() ;
  let playerSelection = prompt("Rock, Paper, Scissors ?").toLowerCase()
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
        break;
    case "paper":
        switch (compChoice) {
            case "rock":
                return "Win";
            case "paper":
                return "Draw";
            case "scissors":
                return "Lose";
        }
        break;
    case "scissors":
        switch (compChoice) {
            case "rock":
                return "Lose";
            case "paper":
                return "Win";
            case "scissors":
                return "Draw";
        }
        break;
    default:
        return "Invalid input";
  }

}

let playerScore = 0;
let compScore = 0;

function game() {
  round = 0;
  playerScore = 0;
  compScore = 0;
  
  do {
    let result = play()
    if (result === "Win"){
      playerScore ++
      console.log("You won 1 point")
      console.log(playerScore);
      console.log(compScore);
    }
    else if (result === "Lose"){
      compScore++
      console.log("Computer won 1 point")
      console.log(playerScore);
      console.log(compScore);
    }
    else {
    console.log("Draw")
    console.log(playerScore);
    console.log(compScore);
  }
  }
  while (playerScore < 3 && compScore < 3)
}


game();

