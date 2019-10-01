// How Many Days Between Two Dates

function getDays(date1, date2) {
    
  console.log(`date1   ${date1}`)
  console.log(`date2   ${date2}`)
    
  let timeInSec = date2.getTime() - date1.getTime()
  let timeInDays = timeInSec/(24*60*60*1000)

  console.log(`time in sec = ${timeInSec}`)
  console.log(`time in Days = ${timeInDays}`)

  return timeInDays
}


// Create a function that takes two dates and returns 
// the number of days between the first and second date.

getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
) // 6

getDays(
  new Date("December 29, 2018"),
  new Date("January 1, 2019")
) // 3

getDays(
  new Date("July 20, 2019"),
  new Date("July 30, 2019")
) // 10