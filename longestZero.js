function longestZero(s) {
    
    console.log(`********************`)
    
    arr = s.split('')
    console.log(arr)

    let zeroCount = 0
    let zeroTot = 0
    let zeroArr = []
    
    for(i=0; i<arr.length; i++){
        
        if(arr[i] === '1'){
            if(zeroCount > zeroTot){zeroTot = zeroCount}
            console.log(`----zeroArr ${zeroTot}-----`)
            zeroCount = 0
        }

        else if(arr[i] === '0'){
            zeroCount++
        }

        console.log(`zeroCount   ${zeroCount}`)
    }

    //check last count
    if(zeroCount > zeroTot){
        zeroTot = zeroCount
    }


    console.log(`TOTAL IS --> zeroArr  ${zeroTot}`)

    // return string
    for(i=0; i< zeroTot; i++){
        zeroArr.push('0')
    }
    console.log(`*******************`)
    console.log(`zeroArr.join() --->  ${zeroArr.join('')}`) 

    return zeroArr.join('')

}

longestZero("01100001011000") //"0000"
longestZero("100100100") // "00"
longestZero("11111") // ""
longestZero("100001110000100000") // Expected: '00000', instead got: '0000'

// Write a function that returns the longest sequence of consecutive 
// zeroes in a binary string.

// Examples
// longestZero("01100001011000") ➞ "0000"

// longestZero("100100100") ➞ "00"

// longestZero("11111") ➞ ""
// Notes
// If no zeroes exist in the input, return an empty string.