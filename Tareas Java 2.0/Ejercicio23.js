const leer = require ("prompt-sync")()
const escribir = console 

class Condicion{
    ejercicioCondicionales (){
            let opcion = parseInt(leer("Digite una opcion"))
	        escribir.log("MENU")
            escribir.log("1. Elevar un número a una potencia X")
            escribir.log("2. Sacar la raíz cuadrada de un número")
            escribir.log("3. Salir")

	    switch (opcion){
			case 1:
				let num = parseFloat(leer("Digite un número"))
				let pot = parseFloat(leer("Digite la potencia"))
				let resultado = Math.pow(num, pot)
				escribir.log("El resultado es: " + resultado)
				break;
			case 2:
				let num2 =parseFloat(leer("Digite un número:"))
				let resultado2=Math.sqrt(num2);
				escribir.log("El resultado es: "+ resultado2)
				break
			case 3:
                escribir.log("Saliendo del programa...")
				break
				default:
				escribir.log("Se equivocó en la opción de menú.")
		}  
	
    }
}
const condicion = new Condicion ()
condicion.ejercicioCondicionales ()