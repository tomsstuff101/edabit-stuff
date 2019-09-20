function isEmpty(s) {
    
    if(s !== ""){
        console.log(`false`)
        return false
    }
    else{
        console.log(`true`)
        return true
    }


}


isEmpty("") // true

isEmpty(" ")// false

isEmpty("a") // false

// Create a function that returns true if a 
// string is empty and false otherwise.

// A string containing only whitespaces " " does not count as empty.
// Don't forget to return the result.