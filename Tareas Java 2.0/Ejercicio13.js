//Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuanto deberá pagar finalmente por su compra.
const leer = require('prompt-sync')()
const escribir = console

class Condicion{
    descuentoCompra(){
        let precio,descuento,precio_final
	    precio=leer("Digite el precio a pagar: ")
	    descuento = precio*0.15;
	    precio_final = precio - descuento
	    escribir.log("El precio a pagar es de : ",precio_final)
        }
}


const condicion = new Condicion()
condicion.descuentoCompra()