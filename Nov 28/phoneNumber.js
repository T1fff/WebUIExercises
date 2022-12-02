//returns "(123) 456-7890"
let newPhoneN = prompt("Do you wanna create a phone number? 1 = yes, 0 = no")
  number1 = [];
  number2 = [];
  number3 = [];

function createPhoneNumber() {
   for (i = 1; i < 4; i++) {
    number = parseInt(prompt("Insert a number"))
  number1.push(number);
}

  for (i = 1; i < 4; i++) {
    number = parseInt(prompt("Insert a number"))
  number2.push(number);
  }

  for (i = 1; i < 5; i++) {
    number = parseInt(prompt("Insert a number"))
  number3.push(number);
  }

  phoneNumber = "("+number1.join("")+")"+" "+number2.join("")+"-"+number3.join("");
  console.log(phoneNumber) 
}

while (newPhoneN == 1) {
 createPhoneNumber();
 newPhoneN = prompt("Do you wanna create a create a phone number? 1 = yes, 0 = no")
    
}
