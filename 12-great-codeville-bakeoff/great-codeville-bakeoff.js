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

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  const checkStock = (ingredients) => {
    ingredients.map((ingredient) => {


      // from here
      if (bakeryA.includes(ingredient)) {
        return true;
      }
      // to here.
    });
  };

  recipes.map((recipe) => {
    return checkStock(recipe.ingredients)
      ? console.log(recipe.name)
      : console.log("No recipes");
  });
};

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
