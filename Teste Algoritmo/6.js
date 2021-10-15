/* Implemente um método que retorne um array, sem valores duplicados.
Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7] */

function Array(array) {
    const newArray = [];
  
    for (let repeat of array) {
      if (newArray.indexOf(repeat) === -1) {
        newArray.push(repeat);
      }
    }
    
   
    return newArray;
}

let result = Array([1,2,3,3,2,4,5,4,7,3])
  
  console.log(result);