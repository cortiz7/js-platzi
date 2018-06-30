
class Toggable {
    constructor(el) {
        this.el = el
        this.el.innerHTML = 'Off'
        this.activated = false
        this.el.addEventListener('click', this.onCLick.bind(this))
    }
    onCLick() {
        //cambiar estado click
        //llamar a toogleText
        this.activated = !this.activated
        this.toogleText()
    }
    toogleText() {
        //cambiar texto
        this.el.innerHTML = this.activated ? 'On' : 'Off'
        console.log(this.activated)
    }
}

const button = document.getElementById('boton')
const miBoton = new Toggable(button)