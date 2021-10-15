/*7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true*/

function EqualizeArrays(array1, array2) {
let TorF
    if (array1.length === array2.length) {
       array1.every((value, index) => {
            return TorF = (value === array2[index]) ;
        })}

    return TorF

}

let result = EqualizeArrays([1, 2, 3, 4], [1, 2, 3, 4])

console.log(result)