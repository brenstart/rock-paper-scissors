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
console.log(getComputerChoice())


// player and computer battles here
function playerVsComp (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a TIE! Battle again!"
    } 
}

console.log(playerVsComp("rock", "rock"))