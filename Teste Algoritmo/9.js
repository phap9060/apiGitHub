/*9) Implemente um método divida um array por uma quantidade passada por parâmetro.
Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]*/

function ArrayDivider(array, number) {
   
    const newArray = new Array(Math.ceil(array.length / number)).fill().map(
      _ => array.splice(0, number))
  
   
    return newArray;
  
}
let result = ArrayDivider([1, 2, 3, 4, 5], 2)
  
  console.log(result)