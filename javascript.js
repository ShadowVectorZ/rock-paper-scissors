let playerScore=0
let computerScore=0

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


function game() {
while (playerScore <5 || computerScore<5) {
    

let playerSelection=prompt("enter Rock, Paper, or Scissors")
let computerSelection= getComputerChoice();
alert(playRound(playerSelection,computerSelection))
}
}
function playRound (playerSelection, computerSelection) {

if (playerSelection.toLowerCase()==="rock"&&computerSelection ==="rock") {
   return declaration="Tie Game!"
   
}

if (playerSelection.toLowerCase()==="rock"&&computerSelection==="scissors") {
    playerScore+=1;
    return declaration="You Win!"
   
}

if (playerSelection.toLowerCase()==="rock"&&computerSelection==="paper") {
    computerScore+=1
    return declaration="You Lose!"
   
}

if (playerSelection.toLowerCase()==="scissors"&&computerSelection==="paper") {
    playerScore+=1;
    return declaration="You Win!"
    
 }
 
 if (playerSelection.toLowerCase()==="scissors"&&computerSelection==="scissors") {
    return declaration="Tie Game!"
 }

 if (playerSelection.toLowerCase()==="scissors"&&computerSelection==="rock") {
    computerScore+=1
    return declaration="You Lose!"
   
 }

 if (playerSelection.toLowerCase()==="paper"&&computerSelection==="paper") {
    return declaration="Tie Game!"
 }

 if (playerSelection.toLowerCase()==="paper"&&computerSelection==="scissors") {
    computerScore+=1
    return declaration="You Lose!"
    
 }
 
 if (playerSelection.toLowerCase()==="paper"&&computerSelection==="rock") {
    playerScore+=1;
    return declaration="You Win!"
    
 }
 

 
 
 



     
     
    console.log(playRound(playerSelection,computerSelection));

}
function winGame () {
    if (playerscore=5) {
        
        return "You Win!"

        
    } else if (computerscore=5) {
     
        return "You Lose!"
    }
}
