
const leer = require('prompt-sync')()
const escribir = console

class Condicion{
    intercambiarValores(){
        let a,b,aux
        a=0
        b=0
        a=leer("Digite el valor de a: ")
		b=leer("Digite el valor de b: ")

		aux = a
		a = b
		b = aux
		
		escribir.log("el nuevo valor de a es: ",a)
		escribir.log("el nuevo valor de b es: ",b)
		
    }
}

const condicion = new Condicion()
    condicion.intercambiarValores()