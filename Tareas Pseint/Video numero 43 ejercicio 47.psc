
Algoritmo Ejercicio_47
	
	Definir  calificacion_baja,calificacion_promedio Como Real;
	Definir calificacion,suma Como Real;
	Definir i Como Entero;
	
	suma <- 0;
	calificacion_baja <- 99999;
	
	Para i <- 1 Hasta 10 Con Paso 1 Hacer
		Escribir i, "Digite la calificacion: ";
		Leer calificacion;
		
		suma <- suma+calificacion;
		Si calificacion < calificacion_baja entonces
			calificacion_baja <- calificacion;
		FinSi
		
	FinPara
	
	calificacion_promedio <- suma/10;
	
	Escribir "La calificacion promedio es: ",calificacion_promedio;
	Escribir "La calificaion mas baja es: ",calificacion_baja;
	
FinAlgoritmo
