/*10) Implemente um método que encontre os valores comuns entre dois arrays.
Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]*/

function FoundValue(array1, array2) {
    let newArray = array1.filter((value) => array2.includes(value));

    return newArray;
}

let result = FoundValue([6, 8], [8, 9])

console.log(result)

