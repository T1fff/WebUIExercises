let string = "www.codewars.com";
let string1 = "www.starwiki.com";

function ipValue(string) {
  let result = 0;
  let arr = [];

  for (i = 0 ; i < string.length ; i++) {
    ascii = string.charCodeAt(i)
    result += ascii;
  }
  
  for (i = 1; i < 5; i++){
    arr.push(i*result%256) ;
  }

  console.log(arr)
}

ipValue(string)
ipValue(string1)
