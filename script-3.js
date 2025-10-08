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
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Go again";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You win! Rock beats scissors";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You win! Paper beats rock";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You win! Scissors beats paper";
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    computerScore++;
    return "You lose! Rock beats scissors";
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore++;
    return "You lose! Paper beats rock";
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore++;
    return "You lose! Scissors beats paper";
  }
}

let div = document.querySelector("div");
let divRock = document.getElementById("rock");
let divPaper = document.getElementById("paper");
let divScissors = document.getElementById("scissors");
const resultsDiv = document.getElementById("results");
const playAgainButton = document.getElementById("playAgain");

div.addEventListener("click", (e) => {
  let humanChoice = e.target.id;
  let computerChoice = getComputerChoice();
  let resultMessage = playRound(humanChoice, computerChoice);
  resultsDiv.innerHTML = `Your choice: ${humanChoice}<br>`;
  resultsDiv.innerHTML += `Computer's choice: ${computerChoice}<br>`;
  resultsDiv.innerHTML += `<b>${resultMessage}</b><br>`;
  resultsDiv.innerHTML += `Score: You ${humanScore} - ${computerScore} Computer`;

  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore > computerScore) {
      let finalMessage = document.createElement("div");
      let spanFinal = document.createElement("span");
      spanFinal.textContent = `You win, your score ${humanScore}`;
      finalMessage.appendChild(spanFinal);
      div.appendChild(finalMessage);
    } else if (humanScore < computerScore) {
      let finalMessage = document.createElement("div");
      let spanFinal = document.createElement("span");
      spanFinal.textContent = `You lose, computers score ${computerScore}`;
      finalMessage.appendChild(spanFinal);
      div.appendChild(finalMessage);
    }
    let rockButton = document.getElementById("rock");
    rockButton.disabled = true;
    let paperButton = document.getElementById("paper");
    paperButton.disabled = true;
    let scissorsButton = document.getElementById("scissors");
    scissorsButton.disabled = true;
    playAgainButton.style.display = "block";
  }
});
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  let rockButton = document.getElementById("rock");
  let paperButton = document.getElementById("paper");
  let scissorsButton = document.getElementById("scissors");
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  resultsDiv.innerHTML = "";
  playAgainButton.style.display = "none";
}
playAgainButton.addEventListener("click", resetGame);
