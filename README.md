This is my first JavaScript project for The Odin Project and it was quite the challenge.

I started by making a function to make the computer choose a random number and using that number to represent 1 of the 3 choices (Rock, Paper or Scissors)

I got the idea of multiplying the Math.random() by 3 and adding 1 after Math.floor() from the previous lesson's assignment (the number-game-errors from MDN)

From there, I created the playerVsComp function to battle out the results of the computer's selection and the player's. Not sure if this is the most optimal way of doing the conditional statements. I feel like it's a bit messy but for now, it's functional. Will optimize this later if I find a better way of doing it.

Then I made the inputSelection() function which prompts the player for input and the result is where the playerVsComp will get the selection from the player's input. I did this by using the functions as an argument (player's selection and the computer's) to be passed to the playerVsComp.

Then placed that function inside a for loop in a function called game() which makes the playerVsComp loop 5 times to make it a Best of Five.

Added variables which keeps track of player and computer scores and made a conditional statement which logs who won the Best of Five depending on who has the higher score.