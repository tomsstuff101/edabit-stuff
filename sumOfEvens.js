function sumOfEvens(arr) {
  // newArr = arr.flat(1)

  // for some stupid reason Edabit wouldnt accept flat method?
  newArr = []
  arr.forEach(element => {
    newArr = newArr.concat(element)
  })
  console.log(`newArr -->  ${newArr}`)

  let tot = 0

  newArr.forEach(element => {
    if(element%2 == 0){
      tot = tot + element
    }
  })

  console.log(`finished tot ${tot}`)
  return tot
}

// Create a function that returns the sum of all even elements in a 2D matrix.


sumOfEvens([
  [1, 0, 2],
  [5, 5, 7],
  [9, 4, 3]
]) // 6

// 2 + 4 = 6

sumOfEvens([
  [1, 1],
  [1, 1]
]) // 0

sumOfEvens([
  [42, 9],
  [16, 8]
]) // 66

sumOfEvens([
  [],
  [],
  []
]) // 0


// Submatrices will be of equal length.
// Return 0 if the 2D matrix only consists of empty submatrices.