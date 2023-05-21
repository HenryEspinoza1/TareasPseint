Algoritmo Ejercicio_27
	//Ejercicio 5: hacer un programa para ingresar el radio de un 
	//circulo y se reporte su área y la longitud de la circunferencia.
	// area = pi * radio^2
	// longitud = 2 * pi * radio
	definir radio,area,lon como real;
	Escribir "digite el valor del radio: ";
	Leer radio;
	area <- pi * radio^2;
	lon <- 2 * pi * radio;
	Escribir "El area de la circunferencia es: ",radio;
	Escribir "La longitud es: ",lon;
FinAlgoritmo
