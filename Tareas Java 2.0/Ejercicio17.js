const leer = require ("prompt-sync")()
const escribir = console 

class Condicion{
    ejercicioCondicionales(){
		let compra  
		let descuento,precio_final 
		compra= leer ("digite la cantidad a pagar: ")
		  
		if (compra>100) {
			descuento = compra*0.2
		}else{
			descuento = 0
		    }
		    precio_final = compra-descuento
		escribir.log("el precio a pagar es: ",precio_final)
	}
}      
const condicion = new Condicion ()
condicion.ejercicioCondicionales()