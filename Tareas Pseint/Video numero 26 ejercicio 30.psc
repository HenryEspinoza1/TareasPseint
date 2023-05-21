//Una tienda ofrece un descuento del 15% sobre el toatl
//de la compra y un cliente  desea saber cuanto deberá pagar
//finalmente por su compra.

Proceso Ejercicio_30
	
	definir precio,descuento,precio_final Como Real;
	Escribir "Digite el precio a pagar: ";
	Leer precio;
	descuento <- precio*0.15;
	precio_final <- precio - descuento;
	Escribir "El precio a pagar es de : ",precio_final;
	
FinProceso

