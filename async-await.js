async function getluke() {
	try {
    	const response = await fetch('https://swapi.co/api/people/1/')
        const luke = await response.json()
        const responseHomeWorld = await fetch(luke.homeworld)
        luke.homeworld = await responseHomeWorld.json()
        console.log(`${luke.name} nació en el Planeta ${luke.homeworld.name}`)
        const dato = document.getElementById('dato')
        dato.innerHTML = `${luke.name} nació en el Planeta ${luke.homeworld.name}`
    } catch (err) {
        console.log(`Request Faile ${err}`)        
    }    
}

getluke()
