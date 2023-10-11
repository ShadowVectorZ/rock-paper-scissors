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



let playerSelection=prompt("enter Rock, Paper, or Scissors")
let computerSelection
computerSelection = getComputerChoice();


function playRound (playerSelection, computerSelection) {

if (playerSelection.toLowerCase()==="rock"&&computerSelection ==="rock") {
   return declaration="Tie Game!"
}

if (playerSelection.toLowerCase()==="rock"&&computerSelection==="scissors") {
   return declaration="You Win!"
}

if (playerSelection.toLowerCase()==="rock"&&computerSelection==="paper") {
   return declaration="You Lose!"
}

if (playerSelection.toLowerCase()==="scissors"&&computerSelection==="paper") {
    return declaration="You Win!"
 }
 
 if (playerSelection.toLowerCase()==="scissors"&&computerSelection==="scissors") {
    return declaration="Tie Game!"
 }

 if (playerSelection.toLowerCase()==="scissors"&&computerSelection==="rock") {
    return declaration="You Lose!"
 }

 if (playerSelection.toLowerCase()==="paper"&&computerSelection==="paper") {
    return declaration="Tie Game!"
 }

 if (playerSelection.toLowerCase()==="paper"&&computerSelection==="scissors") {
    return declaration="You Lose!"
 }
 
 if (playerSelection.toLowerCase()==="paper"&&computerSelection==="rock") {
    return declaration="You Win!"
 }
 
 
 
 



     
     
    console.log(playRound(playerSelection,computerSelection));

}

    
