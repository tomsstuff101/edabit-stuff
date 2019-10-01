function convertTime(time) {

  let displayTime
  let newTime = time.split(' ')
  let timeArr = newTime[0].split(':')
  let hours = Number(timeArr[0])

  if(newTime[1]){
    console.log(`------------------------------`)
    console.log(`${time}  12hr clock`)

        if(newTime[1] == 'pm'){
          // afternoon
          hours = hours + 12
          displayTime = `${hours}:${timeArr[1]}`
         
        }
        else {
              // morning
              if(hours == 12 ){hours = 0} // midnight
              displayTime = `${hours}:${timeArr[1]}`
        }

    }

        else {
          console.log(`------------------------------`)
          console.log(`${time} is 24hr clock`)
          if(timeArr[0] > 12){
            //afternoon
            displayTime = `${(hours - 12)}:${timeArr[1]} pm`
          }
          else{
            //morning
            displayTime = `${hours}:${timeArr[1]} am`
          }
        }

  console.log(`displayTime  ${displayTime}`)

  return displayTime

}


convertTime("12:00 am") // "0:00"
convertTime("6:20 pm") // "18:20"
convertTime("21:00") // "9:00 pm"
convertTime("5:05") // "5:05 am"


// Create a function that converts 12-hour time 
// to 24-hour time or vice versa. Return the output as a string



// A 12-hour time input will be denoted with an am or pm suffix
// A 24-hour input time contains no suffix