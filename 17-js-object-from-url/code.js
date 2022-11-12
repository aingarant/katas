// object from url

const urlDecode =  (text) => {
  let output = {};

  text = text.replace(/&/g, '=')
  
  const textArr = text.split('=');

  for (let i = 0; i < textArr.length; i += 2) {
    output[textArr[i]] = textArr[i + 1].replace(/%20/g, ' ');
  }

  return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);