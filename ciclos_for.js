const nombre = 'COA'
const dias = [
    "lunes",
    "masrtes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo"
]

function correr() {
    const min = 5
    const max = 15
    return Math.round(Math.random() * (max - min)) + min
}
let totalKms = 0
let dias_length = dias.length
for (let i=0; i<dias_length; i++) {
    const kms = correr()
    totalKms += kms
    console.log(`El dia ${dias[i]} ${nombre} corrió ${kms}kms`)
}
console.log(`El total recorrido en la semana es ${totalKms}kms `)
const promedioKms = totalKms / dias_length
console.log(`En promedio ${nombre} corrió ${promedioKms.toFixed(2)}kms `)