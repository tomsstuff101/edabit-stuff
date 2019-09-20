function sumTwoSmallestNums(arr) {
  
  let sorted = arr.sort((a, b) => a - b)
  console.log(sorted)
  
  // filter positive numbers
  let positiveArr = sorted.filter(element => element > 0)
  console.log(positiveArr)

  let sum = positiveArr[0] + positiveArr[1]

  console.log(`sum  ${sum}`)

    return sum
}

sumTwoSmallestNums([19, 5, 42, 2, 77]) // 7
sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) // 3453455
sumTwoSmallestNums([2, 9, 6, -1]) // 8
sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) // 563
sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) // 4519


// Create a function that takes an array of 
// numbers and returns the sum of the two lowest positive numbers.


// Don't count negative numbers.
// Floats and empty arrays will not be used in any of the test cases.