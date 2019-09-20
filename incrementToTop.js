function incrementToTop(arr) {
    
    let tot = 0
    let maxVal = Math.max(...arr)
    console.log(`maxVal   ${maxVal}`)
    arr.forEach(element => {
        let diff = maxVal - element
        tot = tot + diff
        console.log(diff)
    });

        console.log(`tot  ${tot}`)
        return tot

}

incrementToTop([3, 4, 5]) // 3
incrementToTop([4, 3, 4]) //1
incrementToTop([3, 3, 3]) // 0
incrementToTop([3, 10, 3]) // 14


// Create a function that returns the total number of steps it 
// takes to transform each element to the maximal element in the array. 
// Each step consists of incrementing a digit by one.

// Examples
// incrementToTop([3, 4, 5]) ➞ 3
// // 3 increments: 3 -> 4, 4 -> 5; 4 -> 5

// incrementToTop([4, 3, 4]) ➞ 1
// incrementToTop([3, 3, 3]) ➞ 0
// incrementToTop([3, 10, 3]) ➞ 14

// Notes
// If the array contains only the same digits, return 0 (see example #2).
// Bonus: Can you write a solution that achieves this by only traversing 
// the array once? (i.e. without finding the max before hand)