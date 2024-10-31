function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum == 0) {
        return "rock";
    } else if (randomNum == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log("The computer has chosen");

function getHumanChoice() {
    let humanInput = prompt("Rock, paper or scissors?")

    if (humanInput == "rock" || humanInput == "paper" || humanInput == "scissors") {
        return humanInput;
    } else {
        alert("Please input a valid choice")
    }
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "its a draw!";
    } else if(humanChoice === "rock" && computerChoice === "scissors"){
        return "Rock beats scissor, you win!";
    } else if(humanChoice === "rock" && computerChoice === "paper") {
        return "Paper beats rock, you lose!"
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "Paper beats rock, you win!"
    } else if(humanChoice === "paper" && computerChoice === "scissors"){
        return "Scissors beat paper, you lose!"
    } else if(humanChoice === "scissors" && computerChoice === "paper") {
        return "Scissors beat paper, you win!"
    } else if(humanChoice === "scissors" && computerChoice === "rock"){
        return "Rock beats scissors, you lose!"
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(playRound(humanChoice, computerChoice));