let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

function chooseRecipe(bakeryA, bakeryB, recipes) {
  let finalRecipe = "";
  let ingredient1 = "";
  let ingredient2 = "";

  // merge stock from bakery A and B
  let allItems = bakeryA.concat(bakeryB);

  recipes.forEach((recipe) => {
    for (let i = 0; i < recipe.ingredients.length; i++) {
      ingredient1 = recipe.ingredients[i];
      ingredient2 = recipe.ingredients[i + 1];


      if (allItems.includes(ingredient1) && allItems.includes(ingredient2)) {
        finalRecipe = recipe.name;
      }
    }
  });
  return finalRecipe;
}
