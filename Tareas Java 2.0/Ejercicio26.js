const leer = require ("prompt-sync")()
const escribir = console 

class Condicion {
    ejercicioCondicionales(){
        let suma_pares = 0;
        let suma_impares = 0;
    
        for (let i = 2; i <= 49; i++) {
            if (i % 2 === 0) {
                suma_pares = suma_pares + 1
            } else {
                suma_impares = suma_impares + 1
            }
        }   escribir.log("la suma de pares es :",suma_pares);
            escribir.log("la suma de impares es :",suma_impares);
        
    }
}
    
const condicion = new Condicion ()
condicion.ejercicioCondicionales()