//Un alumno desea saber cuál será su calificacion final en la 
//materia de algoritmos. Dicha calificacion se compone de los
//siguientes porcentajes.
//55% del promedio de sus tres calificaciones parciales
//30% de la calificaion del examen final.
//15% de la calificacion de un trabajo final.

Proceso Ejercicio_31
	
	definir parcial1,parcial2,parcial3,promedioP,notas_parcial como reales;
	definir examen_final,notaExamen como reales;
	Definir notaTrabajo,notaFinalTrabajo como reales;
	definir notaFinal como real;
	
	Escribir "Digite las 3 notas de los parciales";
	Leer parcial1,parcial2,parcial3;
	promedioP <- (parcial1 + parcial2 + parcial3)/3;
	notas_parcial <- promedioP * 0.55;
	Escribir "Digite la nota de examen final: ";
	Leer examen_final;
	notaExamen <- examen_final * 0.33;
	Escribir "Digite la nota del trabajo final: ";
	Leer notaTrabajo;
	notaFinalTrabajo <- notaTrabajo * 0.15;
	notaFinal <- notas_parcial+notaExamen+notaFinalTrabajo;
	Escribir "La nota final es: ",notaFinal;
	
	
FinProceso

