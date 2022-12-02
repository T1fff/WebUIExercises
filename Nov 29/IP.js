let string = "www.codewars.com";
let string2 = "www.google.com";
let string3 = "www.googlegooglegooglegooglegooglegooglegooogleoggogogoglelesoosles.m";
let string4 = "";

function ipValue(str) {
  if (str.length >= 70 || str.trim() === "") {
    console.log("Check the link provided")
  } else if(str.length < 70){
            let result = 0;
            let arr = [];
    
        for (i = 0 ; i < str.length ; i++) {
          ascii = str.charCodeAt(i)
          result += ascii;
        }

        for (i = 1; i < 5; i++){
          arr.push(i*result%256) ;
        }
  
        console.log(arr)  
    }
}


ipValue(string)
ipValue(string2)
ipValue(string3)
ipValue(string4)
