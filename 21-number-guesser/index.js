let prompt = require("prompt-sync")();

const number = Math.floor(Math.random() * 101);
let guess = +prompt(" my number: " + number + " Guess a number: ");

while (guess !== number) {
  let guess = +prompt(" my number: " + number + " Guess a number: ");
}

if (guess === number) {
  console.log("your guess was correct");
}

console.log(+guess + "You answered: ");
