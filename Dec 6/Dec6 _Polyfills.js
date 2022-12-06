/*forEach*/
const myforEach = function(array, callback) {
  let newArray = []
  for (let i = 0; i < this.length; i++) {
    callback(array[i], i, array)
  }
}

/*myMap*/
const myMap = function(callback) {
  let newArray = []
  for (let i = 0; i < this.length; i++) {
    let newMappedItem = callback(this[i], i, this)
    newArray.push(newMappedItem)
  }
  return newArray
}

/*my Filter*/
const myFilter = function(callback, filter){
    var newArray = [];
    for(i = 0; i< this.length; i++){
        if(callback.call(context, this[i], i, this)){
            arr.push(this[i])
        }
    }
    return newArray;
}