function numInStr(arr) {
    
    console.log(`numInStr is   ${arr}    arr.length ${arr.length}`)

    let newArr = []
    // let patt = /([0-9])/g    //  'g' passes info on to the next test !! BEWARE

    let patt = /[0-9]/
    
    for(i =0; i<arr.length; i++){

        console.log(`i   --> ${i}`)
        console.log(`arr[i]   ${arr[i]}`)
        
         if(patt.test(arr[i])){
            newArr.push(arr[i])
            
            console.log(`newArr so far is ---> ${newArr}`)
         }
         
    }

    console.log(`newArr      ${newArr}`)
    console.log(`********************************\n\n`)


    return newArr
    


}

// numInStr(["1a", "a", "2b", "b"])     // 1a  2b
// numInStr(["abc", "abc10"])   /abc10
numInStr(["a11bc", "a22bc","a22bc", "a33bc", "m"])  // "a11bc", "a22bc","a22bc", "a33bc"
numInStr(["ab10c","ab10c","ab10c","ab10c","ab10c","ab10c"])  // "ab10c","ab10c","ab10c","ab10c","ab10c","ab10c"
numInStr(["a10bc","a10bc","a10bc","a10bc","a10bc","a10bc"]) // "a10bc","a10bc","a10bc","a10bc","a10bc","a10bc"
numInStr(["this is a test", "test1"])  // "test1"



//     https://regexr.com

//     /([0-9])\w+/g

//     regex test for boolean true/false
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test



// expected output: true

// Create a function that takes an array of 
// strings and returns an array with only 
// the strings that have numbers in them. 


// If there are no strings containing numbers, return an empty array.

// Examples
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) ➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) ➞ ["test1"]
// Notes
// The strings can contain white spaces or any type of characters.