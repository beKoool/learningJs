let randomNumber = Math.floor(Math.random() * 100);
let score = 100;
console.log("%cGuess the Number - Proj 1","color: yellow; font-family:sans-serif; font-size: 20px")

function play() {
  while (true) {
  let guessNumber = Number(prompt("Enter your Guessed Number : "))
  if (guessNumber == randomNumber) {
    console.log("You have won the game")
    console.log("Your score is ", score)
    break;
  }
  else if (guessNumber > randomNumber) {
    console.log("Your guess is larger than the number")
    score -= 1
  }
  else if (guessNumber < randomNumber) {
    console.log("Your guess is smaller than the number")
    score -= 1
  }
  else {
    console.log("You are not a player")
  }
}
}




