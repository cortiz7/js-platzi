const nacimiento = new Date(1989, 5, 7)
const hoy = new Date()

const tiempo = hoy - nacimiento

tiempo_segundos = tiempo/1000
tiempo_minutos = tiempo_segundos/60
tiempo_horas = tiempo_minutos/60

console.log(tiempo_segundos)
console.log(tiempo_minutos)
console.log(tiempo_horas)

const proximo_cumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
const diaSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
]

console.log(proximo_cumple)
console.log(`El dia de la semana de tu cumpelaño es: ${diaSemana[proximo_cumple.getDay()]}`)