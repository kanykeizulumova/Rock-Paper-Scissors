function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  if (randomIndex === 0) {
    console.log("rock");
    return "rock";
  } else if (randomIndex === 1) {
    console.log("paper");
    return "paper";
  } else if (randomIndex === 2) {
    console.log("scissors");
    return "scissors";
  }
}

function getHumanChoice() {
  let humanRandom = prompt("Choose between “rock”, “paper” or “scissors”, ");
  return humanRandom;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Go again");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper");
    humanScore++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You lose! Rock beats scissors");
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You lose! Paper beats rock");
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("You lose! Scissors beats paper");
    computerScore++;
  }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
  for (i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log(`You win, your score ${humanScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You lose, computers score ${computerScore}`);
  }
}
playGame();
