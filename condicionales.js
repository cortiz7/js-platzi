const starWars7 = 'StarWars: El despertar de la fuerza'
const pgEdadPermitida = 13

const nameCoa = 'COA'
const ageCoa = 29

const nameAron = 'Aron'
const ageAron = 9

function canWatchStarWars7(name, age, isWithAdult=false){
	if(age >= pgEdadPermitida){
		alert(`${name} puede pasar a ver ${starWars7}`)
	}else if(isWithAdult){
		alert(`${name} puede pasar aver ${starWars7}.
		Aunque su edad es ${age} , se encuentra acompañado por un adulto`)
	}else{
		alert(`${name} no puede pasar a ver ${starWars7}.
		Tiene ${age} años y necesita tener ${pgEdadPermitida}`)
	}
}

canWatchStarWars7(nameCoa, ageCoa)
canWatchStarWars7(nameAron, ageAron)