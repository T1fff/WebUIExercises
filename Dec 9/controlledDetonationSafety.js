let example = [
  [".", ".", ".", ".", "M"],
  [".", "M", ".", "T", "."],
  [".", ".", "T", ".", "."],
  [".", ".", "M", ".", "T"],
  [".", ".", ".", ".", "."]
]

let example2 = [
  ["M", ".", "T", ".", "."],
  [".", ".", ".", "T", "."],
  [".", ".", "T", ".", "M"],
  ["T", ".", ".", "M", "."],
  [".", ".", ".", ".", "."]
]

function locateExplotion(arr) {
let safePlace = []
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    y = arr[i].indexOf("M")
    x = i
    if (y != -1) {

      for (let j = y; j < arr.length; j++) {
        let spaceX = arr[i][j] 
       if (spaceX == ".") {
            arr[i][j] = "c"
          } else if (spaceX == "T" ) {
          break;
          } 
      } 
      
      for (let j = y; j >= 0; j--) {
        let spaceX = arr[i][j]   
       if (spaceX == ".") {
            arr[i][j] = "c"
          } else if (spaceX == "T" ) {
          break;
          } 
            
      }

      for (let j = x; j < arr.length; j++) {
        spaceY = arr[j][y]
        if (spaceY == ".") {
            arr[j][y] = "c"
        } else if (spaceY == "T" ) {
          break;
        }       
      }

      for (let j = x; j >= 0; j--) {
      spaceY = arr[j][y]
        if (spaceY == ".") {
            arr[j][y] = "c"
        } else if (spaceY == "T" ) {
          break;
        }
      }
      
    } 
  }
  
for (i = 0; i < arr.length; i++){
  for (j = 0; j < arr.length; j++){
    if (arr[i][j] == "."){
      safePlace.push([i,j])
    } 
    }
  }
  return safePlace
}
  


console.log(locateExplotion(example))
console.log(locateExplotion(example2))
