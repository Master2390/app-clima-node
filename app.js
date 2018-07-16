const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {
    try {
        let coord = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coord.lat, coord.lng);
        return `La temperatura en ${ coord.direccion } es de ${ temp } Celsius`;
    } catch (e) {
        return `No es posible obtener el clima en ${ direccion }`;
    }
};

getInfo(argv.direccion)
    .then(temp => console.log(temp))
    .catch(e => console.log(e));