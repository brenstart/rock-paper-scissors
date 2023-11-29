function getComputerChoice () {
  let compResult =""
  let compRandomNum = Math.floor(Math.random()*3)+1
  if (compRandomNum === 1) {
    compResult = "Rock"
    console.log(compRandomNum)
  } else if (compRandomNum === 2) {
    compResult = "Paper"
    console.log(compRandomNum)
  } else {
    compResult = "Scissors"
    console.log(compRandomNum)
  }

  return compResult
}
console.log(getComputerChoice())