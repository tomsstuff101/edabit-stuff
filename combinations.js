function combinations(items) {
    
    console.log(`***********************\n`)

    let tot = 1
        for(i=0; i<arguments.length; i++){
            console.log(`tot  -->  ${tot}      Number(arguments[i]) --> ${Number(arguments[i])}`)
            if(Number(arguments[i]) !== 0)
            {tot = tot * Number(arguments[i])}
        }

        console.log(`tot -->  ${tot}`)

        return tot
}

combinations(2, 3)
combinations(3, 7, 4)
combinations(2, 3, 4, 5)


// Create a function that takes a variable 
// number of groups of items, and returns 
// the number of ways the items can be arranged, 
// with one item from each group. 
// Order does not matter.

// Examples
// combinations(2, 3) ➞ 6

// combinations(3, 7, 4) ➞ 84

// combinations(2, 3, 4, 5) ➞ 120
// Notes
// Don't overthink this one.