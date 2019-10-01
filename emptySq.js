function emptySq(step) {
    
    console.log(`step  ${step}`)
    let result = (Math.pow((step*2),2))-step*4
    console.log(`step ${step}  empty squares = ${result}`)
    return result

}


// In the image below, squares are either empty or filled with a circle.


// Create a function that takes a number as a step 
// and returns the amount of empty squares.
// Test input will always be a positive integer.

emptySq(1) // 0

emptySq(3) // 24

emptySq(10) // 360

