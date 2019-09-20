function reverseOdd(str) {
  
  startStr = str.split(" ")

  arrStr = []  
  
  startStr.forEach(word => {
    
    if((word.length)%2 !== 0){
      //odd
      arrStr.push(word.split("").reverse().join(""))
    }
    else{
      // even
      arrStr.push(word)
    }

  })

    let result = arrStr.join(" ")
    console.log(`result---->\n${result}`)

    return result

}


reverseOdd("Bananas") // "sananaB"

reverseOdd("One two three four") // "enO owt eerht four"


// Given a string, reverse all the words which have odd length. 
// The even length words are not changed.

// reverseOdd("Bananas") ➞ "sananaB"

// reverseOdd("One two three four") ➞ "enO owt eerht four"

// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"

// There is exactly one space between each word and no punctuation is used.