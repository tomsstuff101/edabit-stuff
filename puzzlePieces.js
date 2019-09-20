function puzzlePieces(a1, a2) {
    
    let newArr = []
    let tot

    if(a1.length !== a2.length){
        console.log('false')
        return false
    }

    for(i=0; i<a1.length; i++){
        newArr[i] = a1[i] + a2[i]
    }

    newSet = new Set(newArr)

    console.log(`newSet  ${newSet.size}`)

    const test = (newSet.size == 1) ? true : false

    console.log(`test  ${test}`)
    return test
}



puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]) // true
puzzlePieces([1, 2], [-1, -1]) // false
puzzlePieces([9, 8, 7], [7, 8, 9, 10]) // false


// Write a function that takes two arrays and adds 
// the first element in the first array with the first 
// element in the second array, the second element in 
// the first array with the second element in the 
// second array, etc, etc. 
// Return true if all element 
// combinations add up to the same number. 
// Otherwise, return false.

// Examples
// puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]) ➞ true
// // 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// // Both arrays sum to [5, 5, 5, 5]


// Notes
// Each array will have at least one element.
// Return false if both arrays are of different length.