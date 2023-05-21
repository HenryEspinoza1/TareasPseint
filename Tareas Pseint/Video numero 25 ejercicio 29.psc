Algoritmo Ejercicio_29

	//Ejercicio 7: Un profesor prepara tres cuestionarios para una evaluacion final: A, B, C
	//sabe que se tarde 5 minutos en revisar el cuestionario A, 8 minutos en revisar el cuestionario B
	//y 6 en el C. La cantidad de examenes de cada tipo entran por el teclado
	//¿Cuantas horas y cuantos minutos se tardará en revisar todas las evaluaciones?
	
	definir cantidadA,cantidadB,cantidadC como entero;
	definir tiempoA,tiempoB,tiempoC Como Entero;
	definir tiempo_total como entero;
	definir horas,minutos Como Entero;
	
	Escribir "digite la cantidad de cuestionarios A: ";
	Leer cantidadA;
	Escribir "digite la cantidad de cuestionario B: ";
	Leer cantidadB;
	Escribir "digite la cantidad de cuestionario C: ";
	Leer cantidadC;
	
	//calcular minutos que se tardará por cada cuestionario
	tiempoA <- cantidadA * 5;
	tiempoB <- cantidadB * 8;
	tiempoC <- cantidadC * 6;
	
	//calcular tiempo total que le toma revisar todos los cuestionarios
	tiempo_total <- tiempoA + tiempoB + tiempoC;
	
	//calculamos las horas y minutos
	horas <- trunc (tiempo_total / 60);
	minutos <- tiempo_total % 60;
	
	Escribir " se tardará ",horas," horas y ",minutos, " minutos ";
	
	
FinAlgoritmo
