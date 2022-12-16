/* Output all Fibonacci numbers that satisfy the constraint passed to the function: they are in the specified range or have the specified length.
 Input parameters: Context object with min and max fields, or length field
 Output: array of numbers */

 class Context {
    min
    max

    constructor(min, max){
        this.min = min
        this.max = max
    }
}

const context1 = new Context(2, 15)
const Fiblength = 10

const fibonacciSeries = function(Context) {
    if (Context == null || typeof Context != "object" && typeof Context != "number" || typeof Context == "object" && Object.getOwnPropertyNames(Context).toString() !==  "min,max" || Context < 0) {
        errMessage = "{status: 'failed'"+ "\n" +" reason: 'You must enter an object specifiying the length or the min and max value'}"
        return errMessage
    } 
        let firstN = 0;
        let secondN = 1;
        let nextN = 0;
        let arr = []
    
        let min = Context.min || 0
        let max = Context.max || Context
    
        for (let i = 2; i<= 10000; i++) {
            nextN = secondN + firstN;
            firstN = secondN;
            secondN = nextN;
            if (nextN > min && nextN < max) {
                arr.push(nextN)        
            }
        } 
    
        return arr;
     
 }
 module.exports = {Context, fibonacciSeries}

console.log(fibonacciSeries(context1))
console.log(fibonacciSeries(Fiblength))