const request = require('postman-request')

const getWeather = (lat,long, callBack) => {
    const url = `http://api.weatherstack.com/current?access_key=eec85e3060c6743049f9ee58abbf936b&query=${lat},${long}`
    request({ url: url, json: true }, (error,response) => {
        if (error) {
            callBack("Error with network",undefined)
        } else if(response.body.error) {
            callBack("Error with user input", undefined)
        } else {
            callBack(undefined,{
                feelsLike: response.body.current.feelslike,
                temperature: response.body.current.temperature,
                locationName: response.body.location.name,  
                locationCountry: response.body.location.country, 
                description: response.body.current.weather_descriptions[0]
    })
    }
})}

module.exports = getWeather