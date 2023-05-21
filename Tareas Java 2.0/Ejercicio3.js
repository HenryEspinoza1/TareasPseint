//Operaciones relacionales
    //Entrada:
    //Valor de a=10
    //Valor de b=20
    //Valor de c=30
    //La suma de la variable a y b es: c
const leer = require('prompt-sync')()
const escribir = console

class Condicion{
    operacionesRelacionales()
    {
        let a,b,c,resultado
        a=10
        b=20
        c=30
        resultado=a+b
        escribir.log("La suma de 10 + 20 es: ",resultado)

    }
}
const condicion = new Condicion()
condicion.operacionesRelacionales()