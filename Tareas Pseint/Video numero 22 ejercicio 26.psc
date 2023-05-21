//ejercicio 1 calcular la cantidad de segundos que estan incluidos en el
//el numero de horas, minutos y segundos ingresados por el usuario

Proceso ejercicio_26
	
	Definir horas,minutos,seg como entero;
	definir horas_seg, minutos_seg, total_seg Como Entero;
	
	escribir "digite las horas";
	leer horas;
	escribir "digite los minutos";
	leer minutos;
	escribir "digite la segundos";
	leer seg;
	
	//calcular el equivalente en segundos
	horas_seg <- horas * 3600;
	minutos_seg <- minutos * 60;
	
	total_seg <- horas_seg + minutos_seg + seg;
	
	Escribir "Los segundos esquivalentes son: ",total_seg;
	
	
FinProceso

