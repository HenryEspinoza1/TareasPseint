//Hacer la suma de dos numeros
//Proceso: Se digita 2 numeros los cuales vayan a ser sumados
//Entrada: num1+num2=resultado
//Salida: mostrar en pantalla el resultado de la suma de ambos numeros
const leer = require('prompt-sync')()
const escribir = console

class Condicion{
    sumaNumeros()
    {
        let num1,num2,resultado=num1+num2
        parseInt(num1)
        parseInt(num2)
        num1=leer("Ingrese numero 1: ")
        num2=leer("Ingrese numero 2: ")
        resultado=parseInt(num1) + parseInt(num2)
        escribir.log("El resultado de la suma es: ",resultado)
    }
}
    const condicion = new Condicion()
    condicion.sumaNumeros()