const leer = require ("prompt-sync")()
const escribir = console 
class Condicion {
    ejercicioCondicionales(){
        let N= leer("digite la cantidad de numeros a sumarse: ")
        let suma=0;
        for (let i=1 ; i <= N; i++) {
            suma = suma + i;
            
        }
        escribir.log("la suma es: ",suma)
    }
}    
const condicion = new Condicion ()
condicion.ejercicioCondicionales ()