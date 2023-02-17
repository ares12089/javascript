const Os = require('./Mod/Os');

const Funcion = require ('./Mod/Funcion'); 

    console.table (Os.datosFrecuencia.slice(0,1).map ((registro) => registro.times));
    console.log ("Sistema Operativo: " , Os.SO);
    console.log ("*********************************************");
    console.log ("Ram Disponible: ", Os.DisRam , "Bits");
    console.log ("Ram en Gb: " , Funcion.DisRam (Os.RamDis) , "Gb");
    console.log ("*********************************************");
    console.log ("Ram Total: " , Os.RamT , "Bits");
    console.log ("Ram Total en Gb: " , Funcion.TotRam (Os.RamT) , "GB");

