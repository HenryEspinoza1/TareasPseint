const leer = require ("prompt-sync")()
const escribir = console 
class Condicion{
    ejercicioCondicionales(){
        let num 
        num= parseInt(leer ("digite un numero del dia de la semana: "))
      
        switch (num) {
            case  1: 
             escribir.log("Lunes")
                break;
            case 2: 
             escribir.log("Martes")
                break;
            case 3: 
             escribir.log("Miercoles")
                break;
            case 4: 
             escribir.log("Jueves") 
                break;
            case 5: 
             escribir.log( "Viernes") 
                break;
            case 6: 
             escribir.log("Sabado") 
                break;
            case 7: 
             escribir.log("Domingo") 
                break;
            default:
              escribir.log("error, no existe dia para ese numero")
              
        }
    }
}
const condicion = new Condicion ()
condicion.ejercicioCondicionales()