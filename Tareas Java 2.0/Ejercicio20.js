const leer = require ("prompt-sync")()
const escribir = console 

class Condicion{
    ejercicioCondicionales(){
        let precioK,kilos,precioI,descuento,precio_final
        precioK=0, kilos=0, precioI=0, descuento=0, precio_final=0
        precioK= leer ("Cuanto cuesta el kilo de manzanas?")
       
        kilos= leer ("cuantos kilos de manzanas a comprado? ")
      
        precioI = precioK*kilos
        if (kilos>=0 && kilos<=2) {
            descuento = 0
        }else{
            if (kilos>=2.01 && kilos<=5) {
              descuento = precioI*0.1     
            }else{
                if (kilos>=5.1 && kilos<=10) {
                    descuento = precioI*0.15
                }else{
                    descuento = precioI*0.20
                }
            } 
        }
  
      precio_final = precioI-descuento
      escribir.log("el precio a pagar es: $ ",precio_final)
    }
  
}
const condicion = new Condicion ()
condicion.ejercicioCondicionales ()