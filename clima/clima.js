const axios = require("axios");

const getClima = async(lat, lon) => {
    let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=e31551a5bc9c272545b51013e5312419`)
    return clima.data.main.temp;
}

module.exports = {
    getClima
}