let BigNumber1;
let BigNumber2;

const sumLargestNumbers = function (numbers) {
  let sum;

  if (numbers[0] > numbers[1]) {
    BigNumber1 = numbers[0];
    BigNumber2 = numbers[1];
  }
  else {
    BigNumber1 = numbers[1];
    BigNumber2 = numbers[0];
  }

  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] > BigNumber1) {
      BigNumber2 = BigNumber1;
      BigNumber1 = numbers[i];
    }
  }

  sum = BigNumber1 + BigNumber2;

  return sum;
};

console.log(sumLargestNumbers([1, 10]));
// console.log(sumLargestNumbers([1, 2, 3]));
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
