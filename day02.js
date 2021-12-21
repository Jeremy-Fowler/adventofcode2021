const fs = require('fs')
const {join} = require('path')

const file = fs.readFileSync(join('input.txt'), 'utf8')
const inputs = file.split("\n").filter((x) => Boolean(x)).map(x => String(x));

let horizontal = 0
let depth = 0
let aim = 0

// PART 1

// for(let i = 0; i < inputs.length; i++){
//   const [direction, units] = inputs[i].split(" ")
//   switch (direction) {
//     case 'forward': horizontal += parseInt(units); break;
//     case 'down': depth += parseInt(units); break;
//     case 'up': depth -= parseInt(units); break;
//   }
// }

// console.log(horizontal * depth)

// PART 2

for(let i = 0; i < inputs.length; i++){
  const [direction, units] = inputs[i].split(" ")
  switch (direction) {
    case 'forward': horizontal += parseInt(units);
    if(aim !== 0){depth += (aim * parseInt(units))};
    break;
    case 'down': aim += parseInt(units); break;
    case 'up': aim -= parseInt(units); break;
  }
}

console.log(horizontal * depth)