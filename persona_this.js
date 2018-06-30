
class Persona {
    constructor(nombre, amigos=[]) {
        this.nombre = nombre
        this.amigos = amigos
    }

    listarAmigos() {        
        /*this.amigos.forEach(function (amigo) {
            console.log(`Mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
        }.bind(this)) */
        this.amigos.forEach((amigo) => console.log(`Mi nombre es ${this.nombre} y soy amigo de ${amigo}`))     
    }
}

const coa = new Persona("coa", ['Pedro', 'Luis', 'Jonathan'])