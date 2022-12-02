let array = [1,0,6,3,6,9,4,0,9]
let array1 = [1,5,6,3,0,9,4,0,9,8,9]
let Zeros = 0
//console.log(arr.replace(/0/g,""))

let numZero = (arr) => {
  let string = arr.sort().toString().trim().replace(/,/g,"")
  for (i = 0; i < arr.length; i++) {
    if (string.charAt(i) == "0") {
      Zeros++
    }
  }
  string = string.replace(/0/g,"")
  for (i = 0; i < Zeros; i++){
    string = string.concat("0")
  }
   console.log(string.split(""))
}

numZero(array)
numZero(array1)
