//Entrada: Un maestro desea saber que porcentaje de hombres y que porcentaje de mujeres hay en un grupo de estudiantes
//Proceso: Escribir las variables num_hombres,num_mujeres,total_estudiantes, porcentajeH,porcentajeM
//Salida: Presentar en pantalla el porcentaje de hombres y mujeres

const leer = require('prompt-sync')()
const escribir = console

class Condicion{
    porcentajeEstudiantes(){
        let num_hombres,num_mujeres 
        let total_estudiantes 
        let porcentajeH, porcentajeM  
        num_hombres=leer("digite el numero de hombres:")
        
        num_mujeres=leer("digite el numero de mujeres: ")
        
        total_estudiantes = num_hombres+num_mujeres
        porcentajeH = num_hombres/total_estudiantes * 100
        porcentajeM = num_mujeres/total_estudiantes * 100
        escribir.log( " el porcentaje de hombres es: ",porcentajeH,"%")
        escribir.log("el porcentaje de mujeres es: ",porcentajeM,"%")
        }
}


    const condicion = new Condicion()
    condicion.porcentajeEstudiantes()