
function get(URL, callback) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        const DONE = 4
        const OK = 200
        if (this.readyState === DONE) {
            if (this.status === OK) {
                callback(null, JSON.parse(this.responseText))
            } else {
                callback(new Error(`Se Produjo un error al realizar el request ${this.status}`))
            }
        }
    }

    xhr.open('GET', URL);
    xhr.send(null);
}

function _handleError(err) {
    console.log(`Request Faile ${this.err}`)
}


get('https://swapi.co/api/people/1/', function onResponse(err, luke) {
    if (err) return _handleError(err)
    
    get(luke.homeworld, function onhomeResponse (err, homeworld) {
        if (err) return _handleError(err)

        console.log('Request Succeded')
        console.log('luke', homeworld)
        console.log(`${luke.name} nació en el Planeta ${homeworld.name}`)
        const dato = document.getElementById('dato')
        dato.innerHTML = `${luke.name} nació en el Planeta ${homeworld.name}`
    })
    console.log('Request Succeded')
    console.log('luke', luke)
})
