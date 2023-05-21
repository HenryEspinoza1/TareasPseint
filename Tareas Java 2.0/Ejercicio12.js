//Ejercicio 7: Un profesor prepara tres cuestionarios para una evaluacion final: A, B, C
//sabe que se tarde 5 minutos en revisar el cuestionario A, 8 minutos en revisar el cuestionario B y 6 en el C. La cantidad de examenes de cada tipo entran por el teclado
//¿Cuantas horas y cuantos minutos se tardará en revisar todas las evaluaciones?
const leer = require('prompt-sync')()
const escribir = console

class Condicion{
    revisarCuestionarios(){
        let cantidadA,cantidadB,cantidadC 
        let tiempoA,tiempoB,tiempoC 
        let tiempo_total 
        let horas, minutos 
        cantidadA= leer ("Digite la cantidad de cuestionarios A: ")
        cantidadB= leer("Digite la cantidad de cuestionarios B: ")
        cantidadC= leer ("Digite la cantidad de cuestionarios C: ")
         tiempoA = cantidadA * 5
        tiempoB = cantidadB * 8
        tiempoC = cantidadC * 6
        tiempo_total = tiempoA + tiempoB + tiempoC 
        horas = Math.trunc(tiempo_total / 60)
        minutos = tiempo_total % 60;
        console.log("Se tardara ",horas," horas y ",minutos," minutos ")
        }
}


    const condicion = new Condicion()
    condicion.revisarCuestionarios()