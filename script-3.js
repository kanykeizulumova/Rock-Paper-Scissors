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

div.addEventListener("click", (e) => {
  let humanChoice = e.target.id;
  let computerChoice = getComputerChoice();
  let divHumanChoice = document.createElement("div");
  let spanItem = document.createElement("span");
  spanItem.textContent = `Your choice: ${humanChoice} `;
  divHumanChoice.appendChild(spanItem);
  div.appendChild(divHumanChoice);
  let resultMessage = playRound(humanChoice, computerChoice);
  let divResult = document.createElement("div");
  let spanResult = document.createElement("span");
  spanResult.textContent = resultMessage;
  divResult.appendChild(spanResult);
  div.appendChild(divResult);

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
  }
});
