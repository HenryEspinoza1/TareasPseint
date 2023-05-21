//Calcular la cantidad de segundos que estan incluidos en el numero de horas, minutos y segundos ingresados por el usuario
//Entrada: definir variable horas, minutos, segundos
//Proceso: una vez ingresado el numero de horas calcular el numero de horas
//Salida: Mostrar en pantalla el total del resultado en segundos

const leer = require('prompt-sync')()
const escribir = console

class Condicion{
    calcularSegundos(){
        let horas,minutos,seg
        let horas_seg, minutos_seg, total_seg
        
        horas
        minutos
        seg=0
        horas=leer("digite las horas: ")
        minutos=leer("digite los minutos: ")
        seg=leer("digite la segundos: ")
        
        //calcular el equivalente en segundos
        horas_seg=horas*3600
        minutos_seg=minutos*60
        
        total_seg = horas_seg + minutos_seg + seg
        
        escribir.log("Los segundos esquivalentes son: ",total_seg)

        }
}
    const condicion = new Condicion()
    condicion.calcularSegundos()