const repeatNumbers = (numbers) => {
  result = "";



  for (let i = 0; i < numbers.length; i++) {


    let j = 0;
    while (j < numbers[i][1]) {
      result += numbers[i][0]
      j++
    }

    result += ", ";



  }



  return result;
}
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));