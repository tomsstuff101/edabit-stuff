function keysAndValues(obj) {
    let arrKey = []
    let arrVal =[]
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`)
        arrKey.push([key])
        arrVal.push([value])
      }

        console.log(`arrKey--> ${arrKey} arrVal--> ${arrVal}`)
        return [arrKey, arrVal]

}

// Create a function that takes an object and 
// returns the keys and values as separate arrays.



keysAndValues({ a: 1, b: 2, c: 3 })   // [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }) 
//[["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })  
// [["key1", "key2", "key3"], [true, false, undefined]]


