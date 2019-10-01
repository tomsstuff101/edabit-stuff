//Return the Date from Three Days Prior

function threeDaysAgo(date) {
  
  console.log(`date   ${date}`)
  console.log(`date.toDateString()   ${date.toDateString()}`)

  // create a new date from the original date
  // and set it to three day earlier than the original one
  let threeDaysEarlier = new Date(date.getTime())
  threeDaysEarlier.setDate(date.getDate() - 3)
  
  // convert the date to a string in ISO form
  // remove the last 10 cahrater that hold the time
  // as they aren't required
  console.log(`three Days Earlier .toISOString().slice(0,10) ${threeDaysEarlier.toISOString().slice(0,10)}`)
  
  return threeDaysEarlier.toISOString().slice(0,10)
}


threeDaysAgo(new Date(2018, 0, 1)) // "2017-12-29"
threeDaysAgo(new Date(2015, 5, 17)) // "2015-06-14"
threeDaysAgo(new Date(1965, 3, 15)) // "1965-04-12"


// Given a Date() object, return the date from three 
// days prior as a string: "2016-01-19".


// Your function must work in the past, present and future.
// JavaScript months are zero based.
// Your output should NOT be zero based: 2016, 0, 19 == "2016-01-19".