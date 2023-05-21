const leer = require ("prompt-sync")()
const escribir = console 

class Condicion{
    ejercicioCondicionales(){
 		
        let num1,num2,resultado 
        num1 = leer("digite el primer numero: ")
        num2 = leer("digite el segundo numero: ")
        if (num1=num2) {
        resultado= num1*num2
        }else{
        if (num1>num2) {
        resultado=num1-num2
            }else{
            resultado=num1+num2
                }  
            }  
            escribir.log ("el resultado es: ",resultado);
    }
}
const condicion = new Condicion()
condicion.ejercicioCondicionales()