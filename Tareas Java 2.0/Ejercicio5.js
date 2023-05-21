//Realizar un programa que digite valores de a, b, c
//Entrada: ingresar valores de a, b, c 
//Proceso: poder ejecutar la siguiente expresion matematica ((3+5*8)>3 && ((-6/3*4)+2<2)) || (a<b)
//Salida: Mostrar el valor logico Verdadero
const leer = require('prompt-sync')()
const escribir = console

class Condicion{
    ejercicioMatematico(){
        let a,b 
        let resultado 
        a=leer("Ingrese el valor de a: ")
        b=leer("Ingrese el valor de b: ")
        resultado=((3+5*8)>3 && ((-6/3*4)+2<2)) || (a<b)
        escribir.log("El resultado es: ",resultado)
    }
}

const condicion = new Condicion()
condicion.ejercicioMatematico()