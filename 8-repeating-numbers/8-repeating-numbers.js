const repeatNumbers = (numbers) => {
  result = "";

  for (let i = 0; i < numbers.length; i++) {
    let j = 0;
    while (j < numbers[i][1]) {
      result += numbers[i][0];
      j++;
    }
    if (numbers.length > 1 && i < numbers.length-1)
    result += ", ";
  }
  return result;
};
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));