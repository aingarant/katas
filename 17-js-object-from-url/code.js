const urlDecode =  (text) => {
  let output = {};

  // change string using regex from & to = to make the split easier.
  text = text.replace(/&/g, '=')
  
  // make an array from the string by splitting by =
  const textArr = text.split('=');

  // iterate through newly created array
  for (let i = 0; i < textArr.length; i += 2) {

    // update object from elements of array
    // replace %20 with ' ' (space)
    output[textArr[i]] = textArr[i + 1].replace(/%20/g, ' ');
  }

  return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);