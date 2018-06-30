
/* function saludarGomez(nombre) {
    console.log(`Hola ${nombre} Gomez`)
}

function saludarPerez(nombre) {
    console.log(`Hola ${nombre} Perez`)
} */

function saludarFamilia(apellido) {
    
    return function saludarMiembroDeFamilia(nombre) {
        console.log(`Hola ${nombre} ${apellido}`)
    }
}




saludarGomez('Pedro')
saludarGomez('Monica')
saludarPerez('MArtin')