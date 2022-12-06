let example1 = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]]
let example2 = [['XX', 2], ['XXXX', 6], ['XXXXX', 4]]



function meeting(rooms, chairsNeeded){  
  let totalChairsFree = 0
  let ChairsFree = 0;

  
  chairsTaken = []

  for(i = 0; i < rooms.length; i++ ){
    occupants = rooms[i][0].length;
   totalChairs = rooms[i][1]
     chairsLeft = totalChairs - occupants
       if(chairsLeft <= 0 ){
        chairsTaken.push(0)
      } else if (chairsLeft >= 0 && totalChairsFree < chairsNeeded){
        chairsTaken.push(chairsLeft)
      }
  }
  for (i = 0; i < chairsTaken.length; i++){
        totalChairsFree += chairsTaken[i]
  }

  if (chairsTaken[chairsTaken.length-1] == 0){
    chairsTaken.pop()
  }
  if (chairsNeeded > totalChairsFree) {
        let notEnough = "Not Enough Chairs!"
        return notEnough;
  } else if (chairsNeeded < totalChairsFree){
   
      for(let i = 0; i <= chairsTaken.length-1; i++){
        ChairsFree += chairsTaken[i]
        } 
        if(ChairsFree < chairsNeeded){
          diff1 = chairsNeeded - ChairsFree
          chairsTaken.pop()
          chairsTaken.push(diff1)
          let diff2 = chairsNeeded - ChairsFree
        } 
    } else {
        let GameOn = "GameOn"
          return GameOn;
    }
  return chairsTaken;
}

console.log(meeting(example1, 3))
console.log(meeting(example1, 4))
console.log(meeting(example1, 7))

console.log(meeting(example2, 4))
console.log(meeting(example2, 0))
