function capMe(arr) {
    
    console.log(`arr Input is -->  ${arr}`)

    newArr = []

    arr.forEach(element => {
        
            element = element.toLowerCase()
            let stringArr = element.split("")
            let capLet = stringArr[0].toUpperCase()
            stringArr.shift()
            stringArr.unshift(capLet)
            let newString = stringArr.join("")
            newArr.push(newString)
            console.log(newString)
    });
    
    console.log(`newArr --> ${newArr}`)
    return newArr

}


capMe(["mavis", "senaida", "letty"]) //["Mavis", "Senaida", "Letty"
capMe(["samuel", "MABELLE", "letitia", "meridith"]) //["Samuel", "Mabelle", "Letitia", "Meridith"]
capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) //["Slyvia", "Kristal", "Sharilyn", "Calista"]




// Create a function that takes an array of names and
// returns an array with the first letter capitalized.


// Examples
// capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]
// capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]



// Notes
// Don't change the order of the original array.
// Notice in the second example above, "MABELLE" is returned as "Mabelle".