function lessThanTen (number){
  if (number < 10) {
    number = "0"+ number
  }
  return number
}

function humanReadableTime(number) {
  let hourFormatted = "";
  
  if(typeof number !== "number" || number >  359999 || number < 0){
    let errMessage = "Please review the input!";
    return errMessage;
  } else {
    
      hour = number / 3600
      min = number / 60 % 60
      sec = number % 60

    if (min > 60) {
      min -= min%60
    }
    hour = lessThanTen(Math.floor(hour));
    min = lessThanTen(Math.floor(min));
    sec = lessThanTen(Math.floor(sec));

    if (sec == 60) sec = "00"
    if (min == 60) min = "00"
    
    
    hourFormatted = hourFormatted.concat(hour, ":", min, ":", sec)
    return hourFormatted;
  }
  
}



console.log(humanReadableTime(""))
console.log(humanReadableTime("Hello"))
console.log(humanReadableTime(360000))
console.log(humanReadableTime(null))
console.log(humanReadableTime(undefined))
console.log(humanReadableTime(-65))

console.log(humanReadableTime(120))
console.log(humanReadableTime(121.5))
console.log(humanReadableTime(3600))
console.log(humanReadableTime(8000))
console.log(humanReadableTime(4000))
console.log(humanReadableTime(359999))
