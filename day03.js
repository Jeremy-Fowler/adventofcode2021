const fs = require("fs");

const file = fs.readFileSync('input.txt', {encoding: "utf-8"})
const inputs = file.split('\n').filter((x) => Boolean(x))

let gammaString = ''
let epsilonString = ''
let numbers = []
let one = 0
let zero = 0
let index = 0
let maxLength = inputs[0].length

for(let i = 0; i <= inputs.length && index !== maxLength; i++){
  if(i == inputs.length){
    i = 0
    index++
    for(let n = 0; n <= numbers.length; n++){
      if(n == numbers.length){
        numbers = []
      }
      if(numbers.length > 0){
        let number = numbers[n]
        if(number == '0'){
          zero++
        }
        else if(number == '1'){
          one++
        }

      }
      console.log('iteration done')
    }
  }
  if(zero > one){
    gammaString += '0'
    epsilonString += '1'
    one = 0
    zero = 0
  }
  if(one > zero){
    gammaString += '1'
    epsilonString += '0'
    one = 0
    zero = 0
  }
  const string = inputs[i]
  numbers.push(string[index])
}

let gamma = parseInt(gammaString, 2);
let epsilon = parseInt(epsilonString, 2);

console.log(gamma, "*", epsilon, "=", (gamma * epsilon))
