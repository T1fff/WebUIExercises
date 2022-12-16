/* Print the triangles in descending order of their area.
Input parameters: array of triangle objects
Output: ordered array of triangle names
    • Calculation of the area of a triangle should be made according to Heron's formula.
    • Each triangle is defined by vertex names and the lengths of its sides.
    • The application must handle floating point input:
{ vertices: ‘ABC’,
    a: 10,
    b: 20,
    c: 22.36
    }, 
    */

class triangle {
    vertices;
    a;
    b;
    c;

    constructor(vertices, a, b, c){
        this.vertices = vertices;
        this.a = a;
        this.b = b;
        this.c = c;
    }

    calculateArea(a,b,c){
        let s = (this.a + this.b + this.c)/2
        let area = Math.sqrt(s*(s - this.a)*(s - this.b)*(s - this.c))
        return area
    }
}

let arr = [new triangle("ABC", 22.36, 20, 10), new triangle("TED", 3, 4, 5), new triangle("HIJ", 5, 5, 7)]
let arr1 = []

const sortingTriangles = function(arr){
    //Error handling
    errMessage = "{status: 'failed'"+ "\n" +" reason: 'You must enter an array with the triangles objects'}"
    if (arr == null || typeof arr != "object" ){
        return errMessage
    }

    for (let i = 0; i < arr.length; i++) {
        existTriangle = Object.getOwnPropertyNames(arr[i]).toString() ==  "vertices,a,b,c"
    }

    if (arr.length == 0 || Object.getOwnPropertyNames(arr[0]).toString() !==  "vertices,a,b,c" || existTriangle == false) { 
        return errMessage
    }
    //

    let orderedArray = []
    arr.sort((x, y) => y.calculateArea() - x.calculateArea());
    
    for (i = 0; i < arr.length; i+=1){
        orderedArray.push(arr[i].vertices)
    }
    return orderedArray
 }

module.exports = {sortingTriangles, triangle}


console.log(sortingTriangles(arr))
console.log(sortingTriangles(arr1))
/* console.log(sortingTriangles())
console.log(sortingTriangles(8))
console.log(sortingTriangles(""))
console.log(sortingTriangles("Hello")) 
console.log(sortingTriangles(null))
console.log(sortingTriangles(undefined))
console.log(sortingTriangles(8,8)) */


