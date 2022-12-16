/* There are two envelopes with sides (a,b) and (c,d). It is required to determine whether one envelope can be enclosed in another. The program must handle the input of floating point numbers.
 Input parameters: envelope1 and envelope2 objects
 Output: Envelope (bigger one) number if nesting is possible, 0 if nesting is not possible. */

class Envelope {
    name;
    side1;
    side2;

    constructor(name, side1, side2){
        this.name = name;
        this.side1 = side1;
        this.side2 = side2;
    }
}

const envelope1 = new Envelope("envelope1", 12, 6);
const envelope2 = new Envelope("envelope2", 10, 5);
const envelope3 = new Array


const enclosingEnvelopes = (envelopeA, envelopeB) => {
    
    if (envelopeA == null || envelopeB == null || typeof envelopeA !== "object" || typeof envelopeB !== "object" || Object.getOwnPropertyNames(envelopeA).toString() !==  "name,side1,side2") {
        errMessage = "{status: 'failed'"+ "\n" +" reason: 'You must enter 2 objects each representing 2 different envelopes'}"
        return errMessage
    } 
    //
    let a = envelopeA.side1;
    let b = envelopeA.side2;
    let c = envelopeB.side1;
    let d = envelopeB.side2;
    
    let equal = a == c || b == d || a == d || b == c;
    let biggerAC = a > c;
    let biggerAD = a > d;
    let biggerBC = b > c;
    let biggerBD = b > d;
    
        if (equal == true) {
            return 0;
        } else if (biggerAC == true && biggerBD == true || biggerAD == true && biggerBC == true ) {
            return 1
        }  else if (biggerAC == false && biggerBD == false || biggerAD == false && biggerBC == false ) {
            return 1
        } else {
            return 0
        }
        
  }

module.exports = {enclosingEnvelopes, Envelope}


console.log(enclosingEnvelopes(envelope1, envelope2));
/* console.log(enclosingEnvelopes())
console.log(enclosingEnvelopes(8))
console.log(enclosingEnvelopes(""))
console.log(enclosingEnvelopes("Hello"))
console.log(enclosingEnvelopes(null, null))
console.log(enclosingEnvelopes(null))
console.log(enclosingEnvelopes(8,8)) */
