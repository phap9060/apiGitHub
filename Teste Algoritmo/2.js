/*2) Implemente um método que inverta um array, não utilize métodos nativos do array.
Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]*/

function InverterArray() {
    let Array = [1,2,3,4];
    let NewArray = [];
  
    for (i = Array.length - 1; i >= 0; i--) {
        NewArray.push(Array[i])
    }
  
    
    return NewArray;
}

let result = InverterArray()
  
  console.log(result)