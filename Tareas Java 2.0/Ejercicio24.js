const leer = require ("prompt-sync")()
const escribir = console 

class Condicion{
    ejercicioCondicionales(){
        for (let i = 1; i <= 10; i++) {
            escribir.log(i);
        }
    
    }
}    
const condicion = new Condicion ()
condicion.ejercicioCondicionales ()