function platzom(str) {
	let translation = str

	//Si la palabra original es un palindromo
	//ninguna regla anterior cuenta y se devuelve
	//la misma palabra intercalando MAyusuculas y Minusculas
	const reverse = (str) => str.split('').reverse().join('')
	function minMay(str) {
		const length = str.length
		let translation = ''
		let capitalize = true

		for(let i = 0; i<length; i++){
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize	
		}
		return translation
	}
	if(str == reverse(str)) {
		return minMay(str)
	}

	//Si la palabra termina en ar, se le quitan es dos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2)
	}

	//Si la palabra inicia con Z, se le añade "pe" al final
	if(str.toLowerCase().startsWith('z')) {
		translation += 'pe'
	}

	//Si la palabra traducida tiene 10 o mas letras, se deb partir a la mitad y unir con un - al medio
	length_trans = translation.length
	if (length_trans>= 10) {
		const firstHalf = translation.slice(0, Math.round(length_trans/2))
		const secondHalf = translation.slice(Math.round(length_trans/2))
		translation = `${firstHalf}-${secondHalf}`
	}

	return translation
}

console.log(platzom('promocionar'))
console.log(platzom('Zorro'))
console.log(platzom('Zarpar'))
console.log(platzom('abecedario'))
console.log(platzom('sometemos'))