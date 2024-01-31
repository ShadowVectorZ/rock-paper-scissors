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

let playerSelection

let game =function(){
     let computerScore=0
let playerScore=0 

let singleRound = function(){


   let computerSelection = getComputerChoice()

  


   if (computerSelection===playerSelection) {
      alert ("Tie Game, play again")
      singleRound()
   
   }

   else if (computerSelection=="rock"&&playerSelection=="paper") {
      playerScore+=1
      return "Player wins!"
   }


   else if (computerSelection=="paper"&&playerSelection=="scissors") {
      playerScore+=1
      return "Player wins!"
   }

   else if (computerSelection=="scissors"&&playerSelection=="rock") {
      playerScore+=1
      return "Player wins!"
   }

  else if (computerSelection=="rock"&&playerSelection=="scissors") {
      computerScore+=1
      return "Computer wins!"
  }

  else if (computerSelection=="paper"&&playerSelection=="rock") {
      computerScore+=1
      return "Computer wins!"
  }


  else if (computerSelection=="scissors"&&playerSelection=="paper") {
      computerScore+=1
      return "Computer wins!"
  }
  

}

console.log(singleRound())



if (playerScore>computerScore)
return (`Player has ${playerScore} points! Computer has ${computerScore} points! Player Wins!` )

else return (`Player has ${playerScore} points! Computer has ${computerScore} points! Computer Wins!` )

}


const rock=document.querySelector('#rock')
rock.addEventListener('click',function(){
   playerSelection='rock'
})
rock.addEventListener('click',game)

const paper=document.querySelector('#paper')
paper.addEventListener('click',function(){
   playerSelection='paper'
})
paper.addEventListener('click',game)

const scissors=document.querySelector('#scissors')
scissors.addEventListener('click',function(){
   playerSelection='scissors'
})
scissors.addEventListener('click',game)


