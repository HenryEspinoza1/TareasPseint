//Hacer la suma de un numero entero
//Entrada: Declarar las variables a=10,b,resultado
//Proceso: Ejecutar la suma de la variable b
//Salida: Presentar el resultado de la suma de las a+b variables
const leer = require('prompt-sync')()
const escribir = console

class Condicion{
    mostrarNumero(){
        let a,b,resultado
        a = 10
        parseInt(b)
        b=leer("Digite un numero: ")
        resultado = a+parseInt(b)
        escribir.log("El resultado es: ",resultado)
        }
}

    const condicion = new Condicion()
    condicion.mostrarNumero()