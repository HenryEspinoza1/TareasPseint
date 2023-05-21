const leer = require ("prompt-sync")()
const escribir = console 

class Condicion{
    ejercicioCondicionales(){
        let num, i;
        let conteo_positivos = 0;
        let conteo_negativos = 0;
        let conteo_neutros = 0;
    
        for (i = 1; i <= 10; i++) {
            num = parseInt(leer(i + ". Digite un número: "));
      
            if (num === 0) {
                conteo_neutros++;
            } else {
                if (num > 0) {
                    conteo_positivos++;
                } else {
                    conteo_negativos++;
                }
            }
        }
        escribir.log("la cantidad de positivos es :",conteo_positivos); 
        escribir.log("la cantidad de negativos es: ",conteo_negativos);
        escribir.log("la cantidad de neutros es: ",conteo_neutros);
    }
}
const condicion = new Condicion ()
condicion.ejercicioCondicionales()
