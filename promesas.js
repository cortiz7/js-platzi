
function get(URL) {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            const DONE = 4
            const OK = 200
            if (this.readyState === DONE) {
                if (this.status === OK) {
                    resolve(JSON.parse(this.responseText))
                } else {
                    reject(new Error(`Se Produjo un error al realizar el request ${this.status}`))
                }
            }
        }
    
        xhr.open('GET', URL);
        xhr.send(null);
    })
}


let luke
get('https://swapi.co/api/people/1/')
    .then ((response) => {
        luke = response        
        return get(luke.homeworld)
    })
    .then ((homeworld) => {
        luke.homeworld = homeworld        
        console.log(`${luke.name} nació en el Planeta ${homeworld.name}`)
        const dato = document.getElementById('dato')
        dato.innerHTML = `${luke.name} nació en el Planeta ${homeworld.name}`
    })
    .catch(err => console.log(`Request Faile ${err}`))
