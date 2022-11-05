const multiplicationTable = (maxValue) => {
  let x = "";
  let y = "";
  let a="";
  for (let i = 0; i < maxValue; i++) {
    {
      a +=   i+1;
      let j=0;
      {
        while (j < maxValue)
        {
          y += j * a;
          console.log(y)
          j++
        }
      }
    }
  }
  return x;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));