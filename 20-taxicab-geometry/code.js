const blocksAway = function (directions) {
  let location = {
    east: 0,
    north: 0,
    west: 0,
    south: 0,
  };

  let direction = "";
  let moves = "";
  let spot = 0;
  // Put your solution here

  for (let i = 0; i <= directions.length; i++) {

    if (directions[i] === "left" || directions[i] === "right") {
      moves = directions[i + 1];
      console.log(moves);

      if (spot === 0)
      {
        
      }

    }
  }
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
// console.log(
//   blocksAway([
//     "left",
//     1,
//     "right",
//     1,
//     "left",
//     1,
//     "right",
//     1,
//     "left",
//     1,
//     "right",
//     1,
//   ])
// );
// console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
