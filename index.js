// This function returns result of Computer based on random num from 1 to 3
function getComputerChoice () {
  let compResult =""
  let compRandomNum = Math.floor(Math.random()*3)+1
  if (compRandomNum === 1) {
    compResult = "Rock"
   // console.log(compRandomNum)
  } else if (compRandomNum === 2) {
    compResult = "Paper"
   // console.log(compRandomNum)
  } else {
    compResult = "Scissors"
   // console.log(compRandomNum)
  }

  return compResult
}
//console.log(getComputerChoice())


// player and computer battles here
let winMsg = "You Win!"
let loseMsg = "You Lose!"
function playerVsComp (playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
      return "It's a TIE! Battle again!";
      //playerVsComp(); //if tie, battle again
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      return loseMsg
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return winMsg
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
      return loseMsg
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      return winMsg
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return loseMsg
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return winMsg
    }
  }



let selection =""
function inputSelection() {
    selection = prompt("Rock, Paper or Scissors?")
}
    inputSelection()



//This inititates the battle sequence
console.log(playerVsComp(`${selection}`, `rock`)) //made the func inputSelection add it's result here as an argument
