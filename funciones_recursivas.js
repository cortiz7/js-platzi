
let contador = 0
function fibonacci(num, memoria={}) {
    contador++
    if(memoria[num])return memoria[num]
    if (num === 1) return 0
    if (num === 2) return 1    
    
    return memoria[num] = fibonacci(num - 1, memoria) + fibonacci(num -2, memoria)
}


fibonacci(4) // 0
console.log(contador)
