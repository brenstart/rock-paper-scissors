// This function returns result of Computer based on random num from 1 to 3
function getComputerChoice() {
  let compResult =""
  let compRandomNum = Math.floor(Math.random()*3)+1
  if (compRandomNum === 1) {
    compResult = "rock"
   // console.log(compRandomNum)
  } else if (compRandomNum === 2) {
    compResult = "paper"
   // console.log(compRandomNum)
  } else {
    compResult = "scissors"
   // console.log(compRandomNum)
  }

  return compResult
}
// console.log("computer choice: " + getComputerChoice())


// player and computer battles here
let compScore = 0
let playerScore = 0
let winMsg = "You Win!"
let loseMsg = "You Lose!"
function playerVsComp (playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase() //should I make the input case insensitive during the prompt inputSelection function or here?

    if (playerSelection === computerSelection) {
      console.log("Computer chose " + computerSelection + ". You chose " + playerSelection)
      console.log(`Current score: You: ${playerScore} Computer:${compScore}`)
      return "It's a TIE! Battle again!";
      //playerVsComp(); //if tie, battle again
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      console.log("Computer chose " + computerSelection + ". You chose " + playerSelection)
      compScore += 1
      console.log(`Current score: You: ${playerScore} Computer:${compScore}`)
      return loseMsg
      
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log("Computer chose " + computerSelection + ". You chose " + playerSelection)
      playerScore += 1
      console.log(`Current score: You: ${playerScore} Computer:${compScore}`)
      return winMsg
      
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      console.log("Computer chose " + computerSelection + ". You chose " + playerSelection)
      compScore += 1
      console.log(`Current score: You: ${playerScore} Computer:${compScore}`)
      return loseMsg
      
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log("Computer chose " + computerSelection + ". You chose " + playerSelection)
      playerScore += 1
      console.log(`Current score: You: ${playerScore} Computer:${compScore}`)
      return winMsg
      
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      console.log("Computer chose " + computerSelection + ". You chose " + playerSelection)
      compScore += 1
      console.log(`Current score: You: ${playerScore} Computer:${compScore}`)
      return loseMsg
      
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      console.log("Computer chose " + computerSelection + ". You chose " + playerSelection)
      playerScore += 1
      console.log(`Current score: You: ${playerScore} Computer:${compScore}`)
      return winMsg
      
    }
  }






//game function

function game() {
for (let i = 1; i < 6; i++){


// This requests for an input from the player
let selection =""
function inputSelection() {
    selection = prompt("Rock, Paper or Scissors?")
    return selection
}
   // inputSelection()

let compSelection = getComputerChoice

//This inititates the battle sequence
console.log(playerVsComp(inputSelection(), getComputerChoice())) //made the func inputSelection add it's result here as an argument

}


}



game()
if (playerScore > compScore) {
  console.log ("You won the best of 5!")
} else if (compScore > playerScore) {
  console.log ("Computer won the best of 5!")
  
}