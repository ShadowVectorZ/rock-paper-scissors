function getComputerChoice (){
    let randomNumber=Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0:
            return "rock";
            break;
        case 1: 
        return "scissors";
        break;
        case 2:
            return "paper";
            break;  
    };
}
let playerSelection 
let computerSelection
computerSelection = getComputerChoice();


function playRound (playerSelection, computerSelection) {

if (playerSelection==="rock"&&computerSelection ==="rock") {
   return declaration="Tie Game!"
}

if (playerSelection==="rock"&&computerSelection==="scissors") {
   return declaration="You Win!"
}

if (playerSelection==="rock"&&computerSelection==="paper") {
   return declaration="You Lose!"
}



     playerSelection = "rock"
    console.log(playRound(playerSelection,computerSelection));

}
