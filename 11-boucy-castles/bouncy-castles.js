const pi = Math.PI;


const coneVolume = function (radius, height) {
  return pi * (radius * radius) * (height / 3)
}

const prismVolume = function (height, width, depth) {
  return height * width * depth;
}
const sphereVolume = function (radius) {
  return (4 / 3) * pi * (radius * radius * radius);
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
console.log(prismVolume(3, 4, 5) === 60);
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const totalVolume = function (solids) {
  let total = 0;

  solids.map((solid) => {
    switch (solid.type) {
      case 'sphere': total += sphereVolume(solid.radius)
        break;

      case 'cone': total += coneVolume(solid.radius, solid.height)
        break;

      case 'prism': total += prismVolume(solid.height, solid.width, solid.dept)
        break;
    }
  }
  )
  // console.log('total volume: ', total)
  return total;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);