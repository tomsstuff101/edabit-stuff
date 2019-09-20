function realType(value){

  let typeIs = ""
  let stringy = Object.prototype.toString.call(value)
  let pattArr = ["Number","String","Array","Boolean","Null", "Object", "Function", "Undefined", "RegExp", "Date", "Error"]

  const checkPatt = (pattern) => {
    let regex = RegExp(pattern)
      if(regex.test(stringy)){
      typeIs = pattern
    }
  }

  pattArr.forEach(checkPatt)
  return typeIs.toLowerCase()
  
}

realType(1) //"number"
realType("a") //"string"
realType(true) //"boolean"
realType([]) //"array"
realType(null) //"null"


// Create a function that takes a value as an argument and 
// return the type of this value. 

// You should get the real type of a value 
// (javascript typeof doesn't return the real object type 
// of values and you need to fix that).

// realType(1) ➞ "number"

// realType("a") ➞ "string"

// realType(true) ➞ "boolean"

// realType([]) ➞ "array"

// realType(null) ➞ "null"


