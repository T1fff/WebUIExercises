let createHT = prompt("Do you wanna create a new hashtag? 1 = yes, 0 = no")

while (createHT == 1) {
  let string = prompt("Insert a string");
    if (string.length < 140) {
      //separate the string in different arrays
    string = string.split(" ");
  
      //This lets us capitalize the first letter of each word
      for (let i = 0; i < string.length; i++) {
        string[i] = string[i][0].toUpperCase() + string[i].substr(1);
      }
      
      //convert the arrays to a string
    string = string.join(" ");
  
      //eliminate the spaces using a RegEx
    result = string.replace(/ /g, "");
    Hashtag = "#"+result
    console.log(Hashtag)
  } else {
      console.log(false)
  }

  createHT = prompt("Do you wanna create a new hashtag? 1 = yes, 0 = no")
}
