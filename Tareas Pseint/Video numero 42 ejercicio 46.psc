// Ejercicio: Leer 10 numeros e imprimir cuantos son positivos,
// cuantos negativos y cuantos neutros
Algoritmo Ejercicio_46


	Definir num,i como entero;
	Definir conteos_positivos,conteos_negativos,conteos_neutros como enteros;
	conteos_positivos <- 0;
	conteos_negativos <- 0;
	conteos_neutros <- 0;
	Para i<-1 Hasta 10 Hacer
		Escribir i,".Digite un numero: ";
		Leer num;
		Si num=0 Entonces
			conteos_neutros <- conteos_neutros+1;
		SiNo
			Si num>0 Entonces
				conteos_positivos <- conteos_positivos+1;
			SiNo
				conteos_negativos <- conteos_negativos+1;
			FinSi
		FinSi
	FinPara
	Escribir "La cantidad de positivos es: ",conteos_positivos;
	Escribir "La cantiddad de negativos es: ",conteos_negativos;
	Escribir "La cantidad de neutros es: ",conteos_neutros;
FinAlgoritmo
