//Realizar un programa que digite valores de a, b, c
//Entrada: ingresar valores de a, b, c 
//Proceso: poder ejecutar la siguiente expresion matematica (-b + rc(b^2 - 4*a*c))/(2*a)
//Salida: Mostrar la solucion para dicha expresion matematica
const leer = require('prompt-sync')()
const escribir = console
class Condicion{
    ejercicioRaiz(){
    let a,b,c,resultado
    a=leer("Ingrese el valor de a: ")
    b=leer("Ingrese el valor de b: ")
    c=leer("Ingrese el valor de c: ")
    resultado=(-b + Math.trunc(b^2 - 4*a*c))/(2*a)
    escribir.log("El resultado es: ",resultado)
    }
}
const condicion = new Condicion
condicion.ejercicioRaiz()