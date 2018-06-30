
/*function suma(...numeros) {
    return numeros.reduce( function (totalSuma, numero) {
        totalSuma += numero
        return totalSuma
    }, 0)
}*/

const suma = (...numeros) => numeros.reduce((totalSuma, numero) => totalSuma += numero , 0)

const dobles = (...numeros) => numeros.map(numero => numero * 2)

const pares = (...numeros) => numeros.filter(numero => numero%2 == 0)

console.log(suma(6,8,3, 7))
console.log(dobles(4,5))
console.log(pares(5,8,19,46))