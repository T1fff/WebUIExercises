/* Check if a number or part of it is a palindrome. For example, the number 1234437 is not a palindrome, but its part 3443 is a palindrome. Numbers less than 10 are not considered a palindrome.
 Input parameters: number
 Output: the palindrome extracted from the number, or 0 if the extraction failed.  */

const findPalindrome = function(number) {
  //Error handling

  if (typeof number !== "number" || number < 0 ) {
      errMessage = "{status: 'failed'"+ "\n" +" reason: 'You must enter a positive number'}"
      return errMessage
  }    
  //
  let str = number.toString().split('');
  let largestPalindrome = 0;

  function isPalindrome(number) {
    
      let str2 = number.toString().split('');
      // Iterate over the array of characters, starting from the first and last element
      for (var i = 0, j = str2.length - 1; i < j; i++, j--) {
        // If the current character is not equal to its corresponding character at the opposite end of the array, return false
        if (str2[i] !== str2[j]) {
          return false;
        }
      }
      return true;
    }

  for (let i = 0; i < str.length; i++) {
    // Iterate over the sub-arrays of characters starting from the current character
    for (let j = i + 1; j <= str.length; j++) {
      // Check if the current sub-array of characters is a palindrome
      if (isPalindrome(Number(str.slice(i, j).join(''))) == true) {
        // If the current sub-array is a palindrome, update the largest palindrome variable if the number is larger than the current largest palindrome
        largestPalindrome = Math.max(largestPalindrome, Number(str.slice(i, j).join('')));
      }
    }
  }
  if (largestPalindrome < 10){
      return 0
    }
  // Return the largest palindrome found in the number
  return largestPalindrome;
 }
 module.exports = {findPalindrome }



  console.log(findPalindrome(1234437));
  console.log(findPalindrome(125646589));
  console.log(findPalindrome(null));
  console.log(findPalindrome(345678)); 
  console.log(findPalindrome(1221));