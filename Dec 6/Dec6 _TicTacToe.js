let fila = 0
let winner = undefined
let points = 0

let example = [
  [2, 1, 1],
  [1, 2, 2],
  [2, 2, 1]
]

 function horizontal(array) {
   for (let k = 0; k < 3; k++) {
  points = 0
      for (let i = 0; i < 3; i++) {
      points = 0
          for (let j = 0; j < 3; j++) {
              if (array[i][j] == 0) {
                winner = -1
                return winner;
                  points = -1
                  break;
                } 
            
              if (array[i][j] == k) {
                  points++  
                } 
            
              if (points == 3) {
                if (k == 1) {
                  winner = 1
                  return winner;
                } else if(k == 2){
                  winner = 2
                  return winner;
                }
                break;
              }
          }
        if (points == 3 || points == -1) {
          break;
        }
         //console.log(points)
      }
    if (points == 3 || points == -1) {
      break;
    }
  }
  if (points < 3) {
  winner = 0
  return winner;
  }
}

function vertical(array) {
   for (let k = 0; k < 3; k++) {
  points = 0
      for (let j = 0; j < 3; j++) {
      points = 0
          for (let i = 0; i < 3; i++) {           
              if (array[i][j] == k) {
                  points++  
                } 
            
              if (points == 3) {
                if (k == 1) {
                  winner = 1
                  return winner;
                } else if(k == 2){
                  winner = 2
                  return winner;
                }
                break;
              }
          }
        if (points == 3 || points == -1) {
          break;
        }
         //console.log(points)
      }
    if (points == 3 || points == -1) {
      break;
    }
}
if (points < 3) {
  winner = 0
  return winner;
  }
}


function diagonalright(array) {
for (let k = 0; k < 3; k++) {
    if(array[0][0] == k && array[1][1] == k && array[2][2] == k ){
          if (k == 1) {
            winner = 1
            return winner;
          } else if(k == 2){
            winner = 2
            return winner;
          }
            break;
      }
    }

  
}
function diagonalleft(array){
  for (let k = 0; k < 3; k++) {
    if(array[0][2] == k && array[1][1] == k && array[2][0] == k ){
          if (k == 1) {
            winner = 1
            return winner;
          } else if(k == 2){
            winner = 2
            return winner;
          }
            break;
      }
    }
}

horizontal(example)
vertical(example)
diagonalright(example)
diagonalleft(example)

for (let k = -1; k < 3; k++) {
  if(horizontal(example) == k || vertical(example) == k || diagonalright(example) == k || diagonalleft(example) == k){
  console.log(k)
  } 
}


