Algoritmo Ejercicio_28
	//Ejercicio 6: Un maestro desea saber que porcentaje de hombres y
	//que porcentaje de mujeres hay en un grupo de estudiantes
	
	definir num_hombres,num_mujeres como entero;
	definir total_estudiantes Como Entero;
	definir porcentajeH,porcenatjeM como reales;
	Escribir "digite el valor de hombres: ";
	Leer num_hombres;
	Escribir "digite el valor de mujeres: ";
	Leer num_mujeres;
	
	total_estudiantes <- num_hombres + num_mujeres;
	porcentajeH <- num_hombres / total_estudiantes * 100;
	porcenatjeM <- num_mujeres / total_estudiantes * 100;
	
	
	Escribir "El porcentaje de hombres es: ",porcentajeH, "%";
	Escribir "El porcentaje de mujeres es: ",porcenatjeM, "%";
	
	
FinAlgoritmo
