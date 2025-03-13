
function getComputerChoice(min, max) {
    min=Math.ceil(1);
    max=3;Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
if (getComputerChoice()===1) {
    computerChoice="rock";
}
else if (getComputerChoice()===2) {
    computerChoice="paper";
}
else {
    computerChoice="scissors";
}


function getHumanChoice() {
    let humanChoice=prompt("Rock, Paper, or Scissors?");
    return humanChoice
}

var humanScore=0;
var computerScore=0;

function playRound(humanChoice, computerChoice) {
    
}
