

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
    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score")
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice){
            resultDiv.textContent = "it's a tie!"
        }
        else if (
            (humanChoice === "rock" && computerChoice === "scissors")||
            (humanChoice === "paper" && computerChoice === "rock")||
            (humanChoice === "scissors" && computerChoice === "paper")
        ){
            resultDiv.textContent = "you win!";
            humanScore++;

        }else {
            resultDiv.textContent = "you lose!";
            computerScore++;
        }
        scoreDiv.textContent = "you :" + humanScore + " |computer : " + computerScore;

        if (humanScore === 5){
            resultDiv.textContent = "you win the game!"
        
        }
        else if (computerScore === 5){
            resultDiv.textContent = "you lose the game!"

        }
        
    }
    const rockBtn = document.getElementById("rock")
    const paperBtn = document.getElementById("paper")
    const scissorsBtn = document.getElementById("scissors");

    rockBtn.addEventListener("click", function(){
        playRound("rock", getComputerChoice())
    });
    paperBtn.addEventListener("click", function(){
        playRound("paper", getComputerChoice())
    });
    scissorsBtn.addEventListener("click", function(){
        playRound("scissors", getComputerChoice())
    });



}
playGame();