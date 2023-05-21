// Ejercicio: Determinar si un alumno aprueba o reprueba un curso, sabiendo que
// aprobará si su promedio de tres calificaciones es mayor o igual a 70
// caso contrario reprueba. (Diagrama de flujo)
Proceso Ejercicio_33
	Definir nota1,nota2,nota3 como reales;
	Definir promedio como real;
	Escribir "Digite las 3 calificaciones: ";
	Leer nota1,nota2,nota3;
	promedio <- (nota1+nota2+nota3)/3;
	Si promedio>= 70 Entonces
		Escribir "El alumno está aprobado con: ",promedio;
	SiNo
		Escribir "El alumno está reprobado con: ",promedio;
	FinSi
FinProceso
