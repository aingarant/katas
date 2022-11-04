const multiplicationTable = (maxValue) => {
  let x = "";
  let y = "";
  for (let i = 0; i < maxValue; i++) {
    {
      for (let j = 0; j < maxValue; j++) {
        x = x + j + 1 +  " ";
      }
      y = y + i + "\n";
    }
  }
  return x;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));