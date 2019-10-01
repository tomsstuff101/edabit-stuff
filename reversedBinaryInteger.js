function reversedBinaryInteger(num) {
  
  console.log(`num ${num}`)
  // convert to binary
  let binary = (num).toString(2)
  console.log(`(num).toString(2)  ${binary}`)

  // reverse
  let binArrFilpped = binary.split("").reverse().join("")
  let newBinary = parseInt(binArrFilpped, 2)
  console.log(`reversed ${newBinary}`)

  return newBinary

}

reversedBinaryInteger(10) // 5
// 10 = 1010 -> 0101 = 5

reversedBinaryInteger(12) // 3
// 12 = 1100 -> 0011 = 3

reversedBinaryInteger(25) // 19
// 25 = 11001 -> 10011 = 19

reversedBinaryInteger(45) // 45
// 45 = 101101 -> 101101 = 45


// All values of n will be positive.

// Write a function that takes an integer n, reverses the binary 
// representation of that integer, and returns the new integer 
// from the reversed binary.
