

Algoritmo Ejercicio_35

	Definir numero1, numero2, respuesta Como Entero;
	
	Escribir "Digite 2 numeros:";
	Leer  numero1, numero2;
	
	si numero1=numero2 Entonces
		respuesta <- numero1*numero2;
	sino 
		si numero1 > numero2 Entonces
			respuesta <- numero1-numero2;
			
		sino
			respuesta <- numero1 + numero2;
			
		FinSi
	FinSi
	
	Escribir "El resultado es: ",respuesta;
	
FinAlgoritmo
