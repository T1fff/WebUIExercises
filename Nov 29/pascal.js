function pascalTriangle(rows) {
    if (rows === 0){
      return [[1]];
    }      
    if (rows === 1){
      
    }
      
    let result = [];
    for (let i = 1; i <= rows; i++) {
        let arr = [];
        for (let col = 0; col < i; col++) {
            if (col === 0 || col === i - 1) {
                arr.push(1);
            } else {
                arr.push((result[i-2][col-1] + result[i-2][col]));
            }
        }
        result.push(arr);
    }
    console.log(result);
}

pascalTriangle(4)