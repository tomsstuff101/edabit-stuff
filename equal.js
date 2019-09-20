function equal(a, b, c) {

    console.log(`a ${a}   b ${b}   c ${c}`)
    set1 = new Set()

    set1.add(a).add(b).add(c)


    if(set1.size === 3){
        console.log("-->0")
        return 0
    }
    else if(set1.size === 2){
        console.log("-->2")
        return 2
    }
    else {
            console.log("-->3")
            return 3
    }


}


equal(3, 4, 3) // 2

equal(1, 1, 1) // 3

equal(3, 4, 1) // 0


// Create a function that takes three integer arguments (a, b, c)
// and returns the number of equal values.

// Examples
// equal(3, 4, 3) ➞ 2

// equal(1, 1, 1) ➞ 3

// equal(3, 4, 1) ➞ 0
// Notes
// Your function must return 0, 2 or 3.