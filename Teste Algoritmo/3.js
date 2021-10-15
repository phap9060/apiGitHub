/*Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]*/

function ArrayFilter() {
    const Array = [1,2,'', undefined];
    const newArray = Array.filter((number) =>{
        if (number >= 0){
            return number
        }
    });
  
  
    return newArray;
}
let result = ArrayFilter()
  
  console.log(result)