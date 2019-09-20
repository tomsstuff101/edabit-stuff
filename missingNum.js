function missingNum(arr) {
    
    const newSet = new Set(arr)
    let missing = 0

    console.log(arr)
    console.log(`newSet  ${newSet}`)

    for(i=1; i<11; i++){
        console.log(`i is ${i}   newSet.has(i) is --> ${newSet.has(i)}`)
        if(!newSet.has(i)){
            missing = i
        }
    }

    console.log(`***** missing is ${missing}`)
    return missing

}


missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) // 5
missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) // 10
missingNum([7, 2, 3, 9, 4, 5, 6, 8, 10]) // 1
missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) // 7
missingNum([1, 7, 2, 4, 8, 10, 5, 6, 9]) // 3




// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) //5
// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) //10
// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) //7



// Create a function that takes an array of numbers 
// between 1 and 10 (excluding one number) and returns the missing number.

// Examples
// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7


// Notes
// The array of numbers will be unsorted (not in order).
// Only one number will be missing.