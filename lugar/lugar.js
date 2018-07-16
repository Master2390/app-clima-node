const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedURL = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyAzv_X2cxhahRmNyBtS56WnJNdBkOPq0Uo`);

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }
    let location = resp.data.results[0].formatted_address;
    let coord = resp.data.results[0].geometry.location;
    return {
        direccion: location,
        lat: coord.lat,
        lng: coord.lng
    }
}

module.exports = {
    getLugarLatLng
}