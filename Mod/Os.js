const Os = require('Os');

const VarOs = {

    RamDis : Os.freemem(),
    RamT : Os.totalmem(),
    SO : Os.type(),
    DatosFre : Os.cpus()

}

module.exports = VarOs;

//console.table (Os.datosFrecuencia.slice(0,1).map ((registro) => registro.times));