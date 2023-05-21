// Ejercicio: Determinar cuánto pagará una persona que compre manzanas en la frutería.

Algoritmo Ejercicio_37
	
	Definir kilos, costo, costofn, costokg,costokfn como Real;
	Escribir "Digite cuantos kilos manzanas compró?";
	Leer  kilos;
	Escribir "Cuanto cuesta el kilo de manzana?";
	Leer costo;
	Si kilos <= 2 Entonces
		costofn <- kilos*costo;
		Escribir "No tiene descueto";
	SiNo
		Si kilos <= 5 Entonces
			costokg <- (kilos*costo);
			costokfn <- costokg*0.1;
			costofn <- costokg-costokfn;
			Escribir "Tiene un descuento del 10%";
		SiNo
			Si kilos <= 10 Entonces
				costokg <- (kilos*costo);
				costokfn <- costokg*0.15;
				costofn <- costokg-costokfn;
				Escribir "Tiene un descuento del 15%";
			SiNo
				Si kilos> 10.01 Entonces
					costokg <- (kilos*costo);
					costokfn <- costokg*0.2;
					costofn <- costokg-costokfn;
					Escribir "Tiene un descuento del 20%";
				FinSi
			FinSi
		FinSi
	FinSi
	Escribir "Entonces tiene que pagar: ","$",costofn,"cts";
	
FinAlgoritmo
