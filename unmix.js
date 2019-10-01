function unmix(str) {
  
  console.log(`str -->  ${str}`)
  let newArr = str.split("")

  console.log(`newArr  -->  ${newArr}`)

  // flip all required elements with neightbour
  for(i=0; i<newArr.length; i=i+2){
    let a = newArr[i]
    let b = newArr[i+1]

    console.log(`a ${a}   b ${b}`)

    newArr[i] = b
    newArr[i+1] = a

    console.log(`--> a ${a}  --> b ${b}`)

  }

  newStr = newArr.join("")
  console.log(`newStr --> ${newStr}`)

  return newStr

}



// Somehow my strings have all become mixed up; every pair of characters has been swapped. 
// Help me undo this so I can understand my strings again.


unmix("123456") // "214365"

unmix("hTsii  s aimex dpus rtni.g") // "This is a mixed up string."

unmix("badce") // "abcde"


// The length of a string can be odd — in this case the 
// last character is not altered (as there's nothing to swap it with).