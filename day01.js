const fs = require('fs')
const {join} = require('path')

const file = fs.readFileSync(join('input.txt'), 'utf8')
const inputs = file.split('\n').map(n => Number(n))

let previous = 0
let increases = 0

for(let i = 0; i < inputs.length; i++){
  previous = inputs[i]
  let current = inputs[i + 1]
  if(current > previous){
    increases++
  }
}

console.log(increases)