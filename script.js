

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        return "rock"
    }
    else if (randomNumber === 1){
        return "paper"
    }
    else {
        return "scissors"
    }
}


function getHumanChoice(){
    let choice = prompt("Enter rock, paper, or scissors:");
    return choice;
}




function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice){
            console.log("it's a tie!")
        }
        else if (
            (humanChoice === "rock" && computerChoice === "scissors")||
            (humanChoice === "paper" && computerChoice === "rock")||
            (humanChoice === "scissors" && computerChoice === "paper")
        ){
            console.log("you win!");
            humanScore++;

        }else {
            console.log("you lose!");
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }



    if (humanScore > computerScore){
        console.log("you won the game!")
    }
    else if (computerScore > humanScore){
        console.log("computer won the game!")
    }
    else {
        console.log("the game is a tie!");
    }



}
playGame();