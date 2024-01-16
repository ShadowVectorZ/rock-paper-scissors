let getComputerChoice = function(){
   let choice = Math.random()*3
   if (choice<=1){
    choice="rock"
   }
   else if (choice<=2){
    choice="paper"
   }
   else 
   {choice="scissors"}

   return choice

}

let computerScore=0
let playerScore=0
let game =function(){
   

let singleRound = function(){
   let playerSelection = prompt("Choose your Weapon")
   if(playerSelection.toLowerCase==="rock"||playerSelection.toLowerCase==="scissors"||playerSelection.toLowerCase==="paper"){
      
   }
   
   let computerSelection = getComputerChoice()


   if (computerSelection===playerSelection.toLowerCase()) {
      alert ("Tie Game, play again")
      singleRound()
   
   }

   else if (computerSelection=="rock"&&playerSelection.toLowerCase()=="paper") {
      playerScore+=1
      return "Player wins!"
   }


   else if (computerSelection=="paper"&&playerSelection.toLowerCase()=="scissors") {
      playerScore+=1
      return "Player wins!"
   }

   else if (computerSelection=="scissors"&&playerSelection.toLowerCase()=="rock") {
      playerScore+=1
      return "Player wins!"
   }

   else {
      computerScore+=1
      return "Computer Wins!"
   }

}

console.log(singleRound())
console.log(singleRound())
console.log(singleRound())
console.log(singleRound())
console.log(singleRound())

if (playerScore>computerScore)
return (`Player has ${playerScore} points! Computer has ${computerScore} points! Player Wins!` )

else return (`Player has ${playerScore} points! Computer has ${computerScore} points! Computer Wins!` )

}