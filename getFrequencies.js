function getFrequencies(arr) {
    
    stuff = {}

    console.log(`******************`)
    
    // array will contain all boolean or all non-bolean - mutualy exclusive
    // Edabit assumens true, false order   
    // not false,true which is what just applying sort will give

    if(typeof arr[0] === 'boolean'){
        console.log(`contains booleans -----`)
        arr.sort( (a,b) => b - a)  // flips the boolean order
        console.log(`arr.sort( (a,b) => b - a)  ${arr}`)
    }
    else {
        console.log(`no booleans -----`)
        arr.sort()
        console.log(`arr.sort  ${arr}`)
    }
    
  
    for(i =0; i<arr.length; i++){
        stuff[arr[i]] = 1
    }

    for(i =0; i<arr.length; i++){

        console.log(`loop   i ${i}   arr[i] --> ${arr[i]}`)

        if((arr[i] === arr[i+1])){
            stuff[arr[i]] = stuff[arr[i]] + 1
        }

    }

    console.log(stuff)
    return stuff
 
}

getFrequencies(["A", "B", "A", "A", "A"]) //{ A: 4, B: 1 }
getFrequencies([1, 2, 3, 3, 2]) //{ "1": 1, "2": 2, "3": 2 }
getFrequencies([true, false, true, false, false]) //{ true: 2, false: 3 }
getFrequencies(["A", "B"]) //{ A: 1, B: 1 }
getFrequencies(["A", "A", "B"]) //{ A: 2, B: 1 }
getFrequencies(["A", "B", "B"]) //{ A: 1, B: 2 }
getFrequencies(["A", "B", "B","B"]) //{ A: 1, B: 3 }
getFrequencies(["A", "B", "B", "C", "B", "A"]) //{ A: 1, B: 3 }
getFrequencies([true,false,true,false,false])

// Create a function that returns the frequency distribution of an array. 
//This function should return an object, where the keys are the 
// unique elements and the values are the frequency in 
// which those elements occur.

// Examples
// getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

// getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

// getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

// getFrequencies([]) ➞ {}
// Notes
// If given an empty array, return an empty object (see example #4).
// The object should be in the same order as in the input array.