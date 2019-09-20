function sevenBoom(arr) {
  
let str = arr.join("")
let newArr= str.split("")

console.log(`str  ${str}`)

const existsArr = newArr.filter(number => {
  return number == 7
})

console.log(`exists Arr -- ${existsArr}`)

  if(existsArr.length > 0){
    console.log('boom')
    return "Boom!"
  }
  else{
    console.log('no 7')
    return "there is no 7 in the array"
  }

}


sevenBoom([1, 2, 3, 4, 5, 6, 7]) // "Boom!"
sevenBoom([8, 6, 33, 100]) // "there is no 7 in the array"
sevenBoom([2, 55, 60, 97, 86]) // "Boom!"


// Create a function that takes an array of numbers and 
// return "Boom!" if the number 7 appears in the array. 
// Otherwise, return "there is no 7 in the array".
