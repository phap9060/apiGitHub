/*1) Implemente um método que crie um novo array baseado nos valores passados.
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']*/


function NewArray (number, letter) {
    let NewArray = []
    let count = 1

    while (count<=number){
        NewArray.push(letter)
        count = count + 1
    }
 
  return NewArray;
}
let result = NewArray(4, 'a')

console.log(result )
