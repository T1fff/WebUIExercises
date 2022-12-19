/* Draw a chessboard with the given dimensions of height and width, according to the principle:
* * * * * *
   * * * * * *
* * * * * *
   * * * * * *
 Input parameters: length, width, character to display.
 Output: line with checkerboard representation */


const drawChessboard = function(length, width, char){
        //Error handling
        if (typeof length !== "number" || typeof width !== "number") {
            errMessage = "{status: 'failed'"+ "\n" +" reason: 'You must enter numbers indicating height and width'}"
            return errMessage
        } 

        if (length < 0 ||  width < 0) {
            errMessage = "{status: 'failed'"+ "\n" +" reason: 'height and width should be positive numbers'}"
            return errMessage
        } 
        //
        let arr = new Array(length)
        let string = ""
    
        for(i = 0; i < length; i+=1) {
            arr[i] = new Array(width)    
        }
    
        for(i = 0; i < length; i+=1) {
            for(j = 0; j < width; j+=1) {
                if (i % 2 == 0){
                    if (j % 2 == 0) {
                        arr[i][j] = char; 
                    } else {
                        arr[i][j] = " "
                    }
                } else {
                    if (j % 2 == 0) {
                        arr[i][j] = " "; 
                    } else {
                        arr[i][j] = char
                    }
                }    
            }  
            string += arr[i].toString().replace(/,/g,"") + "\n" 
        }
        return string
    }
    
    module.exports = {drawChessboard} 


console.log(drawChessboard(8,8,"*"))
console.log(drawChessboard(3,3, "*"))

console.log(drawChessboard())
/* console.log(drawChessboard(8))
console.log(drawChessboard(""))
console.log(drawChessboard("Hello"))
console.log(drawChessboard(360000))
console.log(drawChessboard(null))
console.log(drawChessboard(undefined)) */





