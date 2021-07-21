const request = require('postman-request')

const getWeather = (lat,long, callBack) => {
    const url = `http://api.weatherstack.com/current?access_key=eec85e3060c6743049f9ee58abbf936b&query=${lat},${long}`
    request({ url, json: true }, (error,{ body }) => {
        if (error) {
            callBack("Error with network",undefined)
        } else if(body.error) {
            callBack("Error with user input", undefined)
        } else {
            callBack(undefined,{
                feelsLike: body.current.feelslike,
                temperature: body.current.temperature,
                locationName: body.location.name,  
                locationCountry: body.location.country, 
                description: body.current.weather_descriptions[0]
    })
    }
})}

module.exports = getWeather