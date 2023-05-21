const leer = require('prompt-sync')()
const escribir = console

class Condicion{
    ejercicioCondicionales(){
        let  num 
		num= leer ("digite un numero: ")
		
		if (num % 2 === 0){
			console.log("el numero ",num," es par")
	    } else {
			console.log( "elnumero ",num," es impar")
			
		}
    } 
}

    const condicion = new Condicion()
    condicion.ejercicioCondicionales()