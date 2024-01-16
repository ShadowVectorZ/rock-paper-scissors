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


let game =function(){

let singleRound = function(){
   let playerSelection = prompt("Choose your Weapon")
   if(playerSelection.toLowerCase==="rock"||playerSelection.toLowerCase==="scissors"||playerSelection.toLowerCase==="paper"){
      
   }
   
   let computerSelection = getComputerChoice()


   if (computerSelection===playerSelection.toLowerCase()) {
      return "Tie Game"
   
   }

   else if (computerSelection=="rock"&&playerSelection.toLowerCase()=="paper") {
      return "Player wins!"
   }


   else if (computerSelection=="paper"&&playerSelection.toLowerCase()=="scissors") {
      return "Player wins!"
   }

   else if (computerSelection=="scissors"&&playerSelection.toLowerCase()=="rock") {
      return "Player wins!"
   }

   else return "Computer Wins!"

}

console.log(singleRound())
console.log(singleRound())
console.log(singleRound())
console.log(singleRound())
console.log(singleRound())

}