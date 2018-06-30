
const coa = {
    nombre : 'coa',
    apellido : 'Ortiz'
}
function saludar(veces) {
    for (let i=0; i<veces; i++) {
        console.log(`Hola ${this.nombre} ${this.apellido}`)
    }
}

saludar.call(coa, 3)
saludar.apply(coa, [3])