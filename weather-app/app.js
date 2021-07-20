
const geoLocation = require('./utils/geocode')
const getWeather = require('./utils/getTemperature')


getWeather(lat, long,(error, response) => {
    console.log(`The current temperature is ${response.temperature}, but it feels like ${response.feelsLike}`)
})


geoLocation("Blackpool", (error, response) => {
    const lat = JSON.stringify(response.latitude)
    const long = JSON.stringify(response.longtitude)
    console.log(lat,long)
    getWeather(lat,long)
})
