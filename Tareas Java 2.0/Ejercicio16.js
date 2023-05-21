const leer = require ("prompt-sync")()
const escribir = console 

class Condicion{
    ejercicioCondicionales(){
        let nota1,nota2,nota3 
        let promedio 
        nota1= parseFloat(leer("digite la primera nota: "))
        nota2= parseFloat(leer("digite la segunda nota: "))
        nota3= parseFloat(leer("digite la tercera nota: "))
        promedio = (nota1+nota2+nota3)/3
        if (promedio>=70) {
          escribir.log("el alumno esta aprobado con: ",promedio)
        }else{
          escribir.log("El alumno esta reprobado con: ",promedio)
        }
    }
}  
const condicion = new Condicion ()
condicion.ejercicioCondicionales()