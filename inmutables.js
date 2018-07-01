
let coa = {nombre : 'coa', apellido: 'ortiz', edad: 28}
let otrocoa = coa

function cumple (persona) {
    const clone = Object.assign({}, persona)
    clone.edad++
    return clone    
}
