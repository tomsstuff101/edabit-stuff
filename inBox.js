function inBox(arr) {
    
let newArr = []

arr.forEach(element => {
    console.log(`element   ${element}`)
    newArr.push((element.split("")))
});

console.log(`newArr   ${newArr}`)
let str = newArr.join(' ')
check = str.includes('*')
console.log(`check -->  ${check}`)
return check

}


inBox([
  "###",
  "#*#",
  "###"
]) // true


inBox([
  "####",
  "#  #",
  "#  #",
  "####"
]) // false




// Create a function that returns true if an asterisk * is inside a box.

// Examples
// inBox([
//   "###",
//   "#*#",
//   "###"
// ]) ➞ true

// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) ➞ true

// inBox([
//   "####",
//   "#  #",
//   "#  #",
//   "####"
// ]) ➞ false

// inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) ➞ false
// Notes
// The asterisk will only be inside the box, if it exists.