//Hacer la suma de un numero entero
//Entrada: declarar las variables a=10,b=20,c,resultado=a+b+c
//Proceso:Ejecutar la suma de la variable c
//Salida: Presentar el resultado de la suma de las 3 variables
const leer = require('prompt-sync')()
const escribir = console

class Condicion{
    sumaEnteros(){
        let a,b,c,resultado
	a = 10
	b = 20
    parseInt(c)
	c=leer("Digite un numero: ")
	resultado = a+b+parseInt(c)
	escribir.log("El resultado es: ",resultado)
        }
}

    const condicion = new Condicion()
    condicion.sumaEnteros()