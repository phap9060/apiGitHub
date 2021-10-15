/*8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]*/
const arrayCagado = [[4,5], 6, [8,9,[10]]];
let resultado = [];

const removeSubArray = (arr) => {
  const newArray = arr.map(x => {
   if(typeof x !== 'number'){
    return removeSubArray(x);
   }
   return resultado.push(x)
  })

  return newArray;
};

removeSubArray(arrayCagado);
console.log(resultado)