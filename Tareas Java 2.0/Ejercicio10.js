
//Entrada: Hacer un programa para ingresar el radio de un circulo y se reporte su área y la longitud de la circunferencia
//Proceso: area = pi * radio^2,longitud = 2 * pi * radio
//Salida:  Presentar en pantalla el radio y la longitud
const leer = require('prompt-sync')()
const escribir = console

class Condicion{
    areaLongitud(){
        let radio,area,lon
        const pi=3.1416
        radio=leer("Digite el valor del radio: ")
        area = pi*radio^2
        lon = 2*pi*radio
        escribir.log("El area de la circunferencia es: ",area)
        escribir.log("La longitud es: ",lon)
        }
}

    const condicion = new Condicion()
    condicion.areaLongitud()