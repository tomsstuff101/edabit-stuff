function getMiddle(str) {
    
    result = ""
    let middleChar, middle, middleCharTwo

    if((str.length)%2 == 0){
        console.log(`str ${str}   even`)
        middle = ((str.length)/2) - 1
        middleChar = str.split("")[middle]
        console.log(`middleChar   ${middleChar}`)
        middleCharTwo = str.split("")[middle + 1]
        console.log(`middleChar   ${middleCharTwo}`)
        console.log(`middleChar+middleCharTwo  ${middleChar+middleCharTwo}`)
        return middleChar+middleCharTwo
    }
    else {
        console.log(`str ${str}   odd`)
        console.log(`string length  --> ${str.length}`)
        middle = Math.ceil((str.length)/2) - 1
        console.log(`middle odd -->  ${middle}`)
        middleChar = str.split("")[middle]
        console.log(`middleChar   ${middleChar}`)
        return middleChar
    }


}




getMiddle("test") // "es"
getMiddle("testing") // "t"
getMiddle("middle") // "dd"
getMiddle("A")// "A"

// Create a function that takes a string and returns the 
// middle character(s). If the word's length is odd, return 
// the middle character. If the word's length is even, return 
// the middle two characters.

// Examples
// getMiddle("test") ➞ "es"

// getMiddle("testing") ➞ "t"

// getMiddle("middle") ➞ "dd"

// getMiddle("A") ➞ "A"
// Notes
// All test cases contain a single word (as a string).