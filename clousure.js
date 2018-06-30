
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

const saludarGomez = saludarFamilia('Gomez')
const saludarPerez = saludarFamilia('Perez')



saludarGomez('Pedro')
saludarGomez('Monica')
saludarPerez('MArtin')