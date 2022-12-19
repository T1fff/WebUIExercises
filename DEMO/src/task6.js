/* Output a comma-separated series of length n consisting of natural numbers whose square is not less than the given m.
Input parameters: length and value of the minimum square
Output: a string with a series of numbers */


const seriesOfSquaredNumbers = function(n, m){
    //Error handling
        if (typeof n !== "number" || typeof m !== "number" || n < 0 || m < 0) {
            errMessage = "{status: 'failed'"+ "\n" +" reason: 'You must enter positive numbers indicating the length of the series and the minimun square'}"
            return errMessage
        }
    //
        let arr = []
            for (i = 0; i <= 1000000; i+=1){
            number = Math.pow(i,2)
                if (number > m && arr.length < n){
                    arr.push(i) 
                }  
            }
        return arr
    }
module.exports = {seriesOfSquaredNumbers}





console.log(seriesOfSquaredNumbers(5, 30))
console.log(seriesOfSquaredNumbers(10, 16))
console.log(seriesOfSquaredNumbers())
/* console.log(seriesOfSquaredNumbers(8))
console.log(seriesOfSquaredNumbers(""))
console.log(seriesOfSquaredNumbers("Hello"))
console.log(seriesOfSquaredNumbers(360000))
console.log(seriesOfSquaredNumbers(null))
console.log(seriesOfSquaredNumbers(undefined)) */