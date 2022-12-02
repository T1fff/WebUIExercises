function getReverse(num) {
  let reversedNum = +num.toString().split("").reverse().join("");
  return reversedNum;
}
function nextPalindrome(num) { 
  if (num > 0 && num < 9) {
     return num+1;
  }
  else {
    while(num !== getReverse(num)) {
      num += 1;
    }
    return num;
  }
}

console.log(nextPalindrome("da"));
console.log(nextPalindrome(72));
