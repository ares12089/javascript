let DisRam = function (freemem) {

    let BitGb = 0.000000000125 * freemem;
    let Dec = BitGb.toFixed(7);

    return parseFloat(Dec);

}

let TotRam = totalmem => {

    let BitGb = 0.000000000125 * totalmem;
    let Dec = BitGb.toFixed(8);

    return parseFloat(Dec);

}

const Conver = {

    DisRam,
    TotRam

}

module.exports = Conver;