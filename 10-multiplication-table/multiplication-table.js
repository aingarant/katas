const multiplicationTable = (maxValue) => {
  let x = "";


  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      x += i * j + " ";
    }
    x += "\n";
  }
  return x;
}
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));