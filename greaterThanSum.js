function greaterThanSum(nums) {
    
    let tot = nums[0]    //4

    let flag

    // initialy 3    ;   5;
    for(i = 1; i<nums.length; i++){
        if(nums[i]>tot){
            console.log(`${nums[i]} > tot ${tot}`)
            flag=true
            tot = tot + nums[i]
            console.log(`${flag}`)
        }
        else{
            flag = false
            console.log(`found to be ${flag}-->`)
            return false
        }
    }
    console.log(`Result flag is --> ${flag}`)
    return flag

}


// greaterThanSum([1, 2, 4, 6, 13]) // false

// // 2 > 1 = true
// // 4 > 1 + 2 = true
// // 6 > 1 + 2 + 4 = false
// // 13 > 1 + 2 + 4 + 6 = false


greaterThanSum([2, 3, 7, 13, 28]) // true

// // 3 > 2 = true
// // 7 > 2 + 3 = true
// // 13 > 2 + 3 + 7 = true
// // 28 > 2 + 3 + 7 + 13 = true

// For each number in an array, check if that number 
// is greater than the sum of all numbers that appear 
// before it in the array. If all numbers in the array 
// pass this test, return true. Return false otherwise.


// Notes
// The first number in any array will always pass the test.