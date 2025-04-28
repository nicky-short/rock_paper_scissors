const humanDisplay = document.getElementById("humanDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("result");
const humanScoreCount = document.getElementById("humanScoreCount");
const computerScoreCount = document.getElementById("computerScoreCount");
const result = document.getElementById("result");
const gameOverScreen = document.getElementById("gameOverScreen"); 
const winnerMessage = document.getElementById("winnerMessage"); 
const restartButton = document.getElementById("restartButton"); 



function getComputerChoice() {
    let randomNo = Math.floor(Math.random() * 3 + 1);
        if (randomNo===1) {
            return "rock";
        }
        else if (randomNo===2) {
            return "paper";
        }
        else {
            return "scissors";
        }
    }

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click",() => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    humanDisplay.innerHTML = `<div class="choiceContainer">
                                <p class="choiceText">You chose: </p>
                                <img src="img/${humanChoice}.jpg" alt="${humanChoice}" width="200" height="200">
                                </div>`
    computerDisplay.innerHTML = `<div class="choiceContainer">
                                    <p class="choiceText">Computer chose: </p>
                                    <img src="img/${computerChoice}.jpg" alt="${computerChoice}" width="200" height="200">
                                    </div>`
    if (humanChoice===computerChoice){
        result.innerHTML = "TIE! No points for anyone :/";
        result.style.color = "black";
    }
    else if (humanChoice==="rock" && computerChoice==="paper"){
        result.innerHTML = "Paper beats Rock! The Computer wins this round";
        result.style.color = "red";
        computerScore ++;
        computerScoreCount.innerHTML = `COMPUTER SCORE: ${computerScore}`
    }
    else if (humanChoice==="paper" && computerChoice==="rock"){
        result.innerHTML = "Paper beats Rock! You win this round";
        result.style.color = "green";
        humanScore++;
        humanScoreCount.innerHTML = `YOUR SCORE: ${humanScore}`;
    }
    else if (humanChoice==="paper" && computerChoice==="scissors"){
        result.innerHTML = "Scissors beats Paper! The Computer wins this round";
        result.style.color = "red";
        computerScore ++;
        computerScoreCount.innerHTML = `COMPUTER SCORE: ${computerScore}`
    }
    else if (humanChoice==="scissors" && computerChoice==="paper"){
        result.innerHTML = "Scissors beats Paper! You win this round";
        result.style.color = "green";
        humanScore++;
        humanScoreCount.innerHTML = `YOUR SCORE: ${humanScore}`
    } 
    else if (humanChoice==="rock" && computerChoice==="scissors"){
        result.innerHTML = "Rock beats Scissors! You win this round";
        result.style.color = "green";
        humanScore++;
        humanScoreCount.innerHTML = `YOUR SCORE: ${humanScore}`
    }
    else if (humanChoice==="scissors" && computerChoice==="rock"){
        result.innerHTML = "Rock beats Scissors! The Computer wins this round";
        result.style.color = "red";
        computerScore ++;
        computerScoreCount.innerHTML = `COMPUTER SCORE: ${computerScore}`
        
    }
    checkForWinner();
}

function checkForWinner(){
if (humanScore === 5) {
    winnerMessage.innerHTML = "YOU WIN!";
    winnerMessage.style.color = "green";
    gameOverScreen.style.display = "flex";
}
else if (computerScore === 5) {
    winnerMessage.innerHTML = "YOU LOST!";
    winnerMessage.style.color = "red";
    gameOverScreen.style.display = "flex";
}
}


restartButton.addEventListener("click", restartGame)

function restartGame(){
    gameOverScreen.style.display = "none";
    humanScore = 0;
    computerScore = 0;
    result.innerHTML = "";
    humanScoreCount.innerHTML = "YOUR SCORE: 0";
    computerScoreCount.innerHTML = "COMPUTER SCORE: 0";


}

