const leer = require ("prompt-sync")()
const escribir = console 
class Condicion{
    ejercicioCondicionales(){
		let num1,num2,num3 
		num1 = leer('Digite el primer número: ');
		num2 = leer('Digite el segundo número: ');
		num3 = leer('Digite el tercer número: ');
		    if (num1>num2 & num1>num3) {
			  escribir.log('el mayor es: ',num1)}
	    else{
			  if (num2>num1 & num2>num3) {
				escribir.log( 'el mayor es: ',num2)}
		    else{
				escribir.log("el mayor es: ",num3)}
		}
	}
}
const condicion = new Condicion()
condicion.ejercicioCondicionales()