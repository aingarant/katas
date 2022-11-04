const repeatNumbers = (numbers) => {
  result = "";
  numbers.map((number) => {

    let i = 0;
    while (i < number[1]) {
      result += number[0]
      i++
    }

    result += ", ";
  })
  return result;
}
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));