const leer = require('prompt-sync')()
const escribir = console

class Condicion{
    mostrarNumero(){
        let num1
        num1=0
        num1=leer("Ingrese numero 1: ")
        escribir.log("El numero es: ",num1)
        }
}


    const condicion = new Condicion()
    condicion.mostrarNumero()
    
    
