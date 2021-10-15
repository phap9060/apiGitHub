/*5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. 
Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]*/
function ArrayFilter(array, number1, number2) {
    let filteredArray = array.filter((result) =>{
        if (result !== number1 && result !== number2) {
            return result
        }
    })
 return filteredArray;
}

let result = ArrayFilter([5,4,3,2,5], 5,3)
  
 console.log(result) 

