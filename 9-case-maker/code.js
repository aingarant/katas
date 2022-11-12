const camelCase = function(input) {
  return input.replace(/\W+(.)/g, (a,b)=> b.toUpperCase())
};

console.log(camelCase("this is a string"));
// console.log(camelCase("loopy lighthouse"));
// console.log(camelCase("supercalifragalisticexpialidocious"));

 