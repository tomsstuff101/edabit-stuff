function findBrokenKeys(str1, str2) {
  

    arr1 = str1.split("")
    arr2 = str2.split("")

    console.table(`str1    ${str1}`)
    console.table(`str2    ${str2}`)
    
    let newArr = []

    for (var i in arr1){
      console.log(`arr1[i]  ${arr1[i]}    arr2[i]  ${arr2[i]}`)
      if(arr1[i] !== arr2[i]){
          newArr.push(arr1[i])
      }
    }

    const newSet = new Set(newArr)
    const answer = [...newSet]

    console.log(`\n --->  diff is ${answer}\n\n`)
    return answer

}



findBrokenKeys("happy birthday", "hawwy birthday") // ["p"]

findBrokenKeys("starry night", "starrq light") // ["y", "n"]

findBrokenKeys("beethoven", "affthoif5") // ["b", "e", "v", "n"]


// Given what is supposed to be typed and what is actually typed, 
// write a function that returns the broken key(s). 

// The function looks like:
// findBrokenKeys(correct phrase, what you actually typed)

// Broken keys should be ordered by when they first appear in the sentence.
// Only one broken key per letter should be listed.
// Letters will all be in lower case.