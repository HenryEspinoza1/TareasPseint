
Algoritmo Ejercicio_36
	
	definir n1, n2, n3 como entero;
	Escribir "Digite tres numeros";
	Leer n1, n2, n3;
	Si n1>n2 & n1>n3 Entonces
		Escribir "El numero mayor es: ",n1;
	SiNo
		Si n2>n1 & n2>n3 Entonces
			Escribir "El numero mayor es: ",n2;
		SiNo
			Si n3>n1 & n3>n2 Entonces
				Escribir "El nuemro mayor es: ",n3;
			FinSi
		FinSi
	FinSi
	
FinAlgoritmo
