function getComputerChoice() {
    let randomNo = Math.floor(Math.random() * 3 + 1);
        if (randomNo===1) {
            computerChoice="rock";
        }
        else if (randomNo===2) {
            computerChoice="paper";
        }
        else {
            computerChoice="scissors";
        }
    return computerChoice
    }

function getHumanChoice(){
    humanChoice=prompt("Rock, Paper, or Scissors?").toLowerCase();
    return humanChoice
}


    function playRound(humanChoice, computerChoice) {
        console.log("You chose: " + humanChoice);
        console.log("The Computer chose: " + computerChoice);
        if (humanChoice===computerChoice){
            console.log("TIE! No points for anyone :/");
        }
        else if (humanChoice==="rock" && computerChoice==="paper"){
            console.log("Paper beats Rock! The Computer wins this round");
            computerScore++;
        }
        else if (humanChoice==="paper" && computerChoice==="rock"){
            console.log("Paper beats Rock! You win this round");
            humanScore++;
        }
        else if (humanChoice==="paper" && computerChoice==="scissors"){
            console.log("Scissors beats Paper! The Computer wins this round");
            computerScore++;
        }
        else if (humanChoice==="scissors" && computerChoice==="paper"){
            console.log("Scissors beats Paper! You win this round");
            humanScore++;
        }
        else if (humanChoice==="rock" && computerChoice==="scissors"){
            console.log("Rock beats Scissors! You win this round");
            humanScore++;
        }
        else if (humanChoice==="scissors" && computerChoice==="rock"){
            console.log("Rock beats Scissors! The Computer wins this round");
            computerScore++;
        }
    }



humanScore=0;
computerScore=0;

function playGame(){
    for (i=0; i<5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
        console.log("Computer: " + computerScore);
        console.log("You: " + humanScore);
        
        if (humanScore > computerScore) {
            console.log("YOU ARE THE WINNER OF THIS GAME!");
        }
        else if (humanScore < computerScore){
            console.log("YOU ARE THE LOSER OF THIS GAME");
        }
        else {
            console.log("TIE GAME!");
        }    
     }



playGame();
