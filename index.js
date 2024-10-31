const validChoices = ["rock", "paper", "scissors"];

function startRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);
}

function getHumanChoice() {
  const humanChoice = prompt("Rock, paper or scissors").toLocaleLowerCase();
  if (!validChoices.includes(humanChoice)) return getHumanChoice();

  return humanChoice;
}

function getComputerChoice() {
  const randomChoice =
    validChoices[Math.floor(Math.random() * validChoices.length)];

  return randomChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert(`Tie! You chose ${humanChoice} and computer chose ${computerChoice}`);
    return;
  }
  const isHumanWinner = determineWinner(humanChoice, computerChoice);
  displayResult(humanChoice, computerChoice, isHumanWinner);
}

function determineWinner(humanChoice, computerChoice) {
  const winningConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  return computerChoice === winningConditions[humanChoice];
}

function displayResult(humanChoice, computerChoice, isHumanWinner) {
  if (isHumanWinner) {
    alert(
      `Congratulations! You chose ${humanChoice} and the computer chose ${computerChoice}. You win!`
    );
  } else {
    alert(
      `Sucks to be you... You chose ${humanChoice} and the computer chose ${computerChoice}. You lose.`
    );
  }
}

startRound();
