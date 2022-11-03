const urlEncode = function (text) {
  let encodedUrl = "";
  let word = text.trim();

  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      encodedUrl += "%20"
    }
    else {
      encodedUrl += word[i];
    }
  }
  return encodedUrl;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

