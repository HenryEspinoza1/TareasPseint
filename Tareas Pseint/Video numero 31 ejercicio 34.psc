// En un almacen se hace un 20% de descuento a los clientes cuya compra
// supere los $100. ¿cual será la cantidad que pagará una persona por su compra?(diagrama N-S)
Algoritmo ejercicio_34

	definir compra como real;
	definir descuento,precio_final como real;
	Escribir "digite cantidad a pagar: ";
	leer compra;
	Si compra>100 Entonces
		descuento <- compra * 0.2;
	SiNo
		descuento <- 0;
	FinSi
	precio_final <- compra - descuento;
	Escribir "El precio a pagar es: ",precio_final;
FinAlgoritmo
