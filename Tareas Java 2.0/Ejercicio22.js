const leer = require ("prompt-sync")()
const escribir = console 

class Condicion {
    ejercicioCondicionales(){
	    let decada  
	    decada= parseInt(leer ("digite una decada:"))
	
	    switch (decada) {
		    case 10:
			escribir.log("bodas de hojalata")
		        break;
		    case	20:
		    escribir.log("boda de porcelana")
		        break;
		    case 30:
		    escribir.log("boda de perlas")
		        break;
		    case 40:
		    escribir.log("bodas de rubi")
		        break;
		    case 50:
		    escribir.log("bodas de oro")
		        break;
		    case 60:
		    escribir.log("bodas de diamante")
		        break;
		    default:
			escribir.log("decada no existente")
	   }

    }
}
const condicion = new Condicion ()
condicion.ejercicioCondicionales ()