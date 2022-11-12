// square code
const squareCode = (message) => {
  let text = message.replace(/\s/g, "");
  const split = Math.ceil(Math.sqrt(text.length));
  
  let output = "";

  for (let i = 0; i < text.length; i++) {
    output += text[i];
    if (i % split === 0) {
      output += " ";
    }
  }
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
