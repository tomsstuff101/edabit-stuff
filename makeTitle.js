function makeTitle(str) {
    
    newString = []

    let strArr = str.split(' ')
    console.log(`strArr  ${strArr}`)

    // capitalise
    for(i=0; i<strArr.length; i++){
        
        let wordArr = strArr[i].split("")
        console.log(`wordArr -->  ${wordArr}`)
        let capitalised = wordArr[0].toUpperCase()
        console.log(`capitalised -->  ${capitalised}`)
        wordArr.shift()
        wordArr.unshift(capitalised)
        let wordArrjoin = wordArr.join('')
        console.log(`wordArr after join is -->  ${wordArrjoin}`)
        newString.push(wordArrjoin)
        console.log(`newString   ${newString}`)
        
    }

        let final = newString.join(" ")

        console.log(`final -- ${final}`)
        return final
    
}


makeTitle("This is a title") //"This Is A Title"

makeTitle("capitalize every word") //"Capitalize Every Word"

makeTitle("I Like Pizza") //"I Like Pizza"

makeTitle("PIZZA PIZZA PIZZA") //"PIZZA PIZZA PIZZA"


// Create a function that takes a string as an argument and 
// converts the first character of each word to uppercase. 
// Return the newly formatted string.

// Examples
// makeTitle("This is a title") ➞ "This Is A Title"

// makeTitle("capitalize every word") ➞ "Capitalize Every Word"

// makeTitle("I Like Pizza") ➞ "I Like Pizza"

// makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
// Notes
// You can expect a valid string for each test case.