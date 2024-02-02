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
const score=document.querySelector('#score')

const results =document.querySelector('#results')

let playerSelection
let singleRound = function(){

   let computerSelection = getComputerChoice()


   if (computerSelection===playerSelection.toLowerCase()) {
      score.textContent=`Player Score: ${playerScore}. Computer Score: ${computerScore}`
      results.textContent="Tie Game"
   }
   else if (computerSelection=="rock"&&playerSelection.toLowerCase()=="paper") {
      playerScore+=1
      score.textContent=`Player Score: ${playerScore}. Computer Score: ${computerScore}`
      results.textContent="Paper beats Rock! Player Wins!"
   }
   else if (computerSelection=="paper"&&playerSelection.toLowerCase()=="scissors") {
      playerScore+=1
      score.textContent=`Player Score: ${playerScore}. Computer Score: ${computerScore}`
      results.textContent="Scissors beats Paper! Player Wins!"
   }
   else if (computerSelection=="scissors"&&playerSelection.toLowerCase()=="rock") {
      playerScore+=1
      score.textContent=`Player Score: ${playerScore}. Computer Score: ${computerScore}`
      results.textContent="Rock beats Scissors! Player Wins!"
   }
  else if (computerSelection=="rock"&&playerSelection.toLowerCase()=="scissors") {
      computerScore+=1
      score.textContent=`Player Score: ${playerScore}. Computer Score: ${computerScore}`
      results.textContent= "Rock beats Scissors! Computer wins!"
  }
  else if (computerSelection=="paper"&&playerSelection.toLowerCase()=="rock") {
      computerScore+=1
      score.textContent=`Player Score: ${playerScore}. Computer Score: ${computerScore}`
      results.textContent= "Paper beats Rock! Computer wins!"
  }
  else if (computerSelection=="scissors"&&playerSelection.toLowerCase()=="paper") {
      computerScore+=1
      score.textContent=`Player Score: ${playerScore}. Computer Score: ${computerScore}`
      results.textContent= "Scissors beats Paper! Computer wins!"
  }
 
  if (playerScore==5){
   const container=document.querySelector('#container')
   container.textContent='The Player Wins The Game! Reload To Play Again!'
   buttons.remove()
   
}

if (computerScore==5){
   const container=document.querySelector('#container')
   container.textContent='The Computer Wins The Game! Reload To Play Again!'
   buttons.remove()
   
}

}



let buttons=document.querySelector('#buttons')

buttons.addEventListener('click',(event)=>{
   if (event.target.tagName==='BUTTON'){
      playerSelection=event.target.innerText
      singleRound()
   }
})
