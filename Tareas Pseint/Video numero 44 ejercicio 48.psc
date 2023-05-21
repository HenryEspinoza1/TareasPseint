// Ejercicio. calcular el factorial de un numero mayor o igual a 0
Algoritmo Ejercicio_48
	Definir num como entero;
	Definir i,factorial como enteros;
	Repetir
		Escribir "digite un numero: ";
		Leer num;
	Hasta Que num>=0
	i <- 1;
	factorial <- 1;
	// N! = 1 * 2 * 3 * ... * N
	Mientras i<=num Hacer
		factorial <- factorial * 1;
		i <- i + 1;
	FinMientras
	Escribir "El factorial es: ",factorial;
FinAlgoritmo
