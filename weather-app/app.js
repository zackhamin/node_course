const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=eec85e3060c6743049f9ee58abbf936b&query=Rochdale'

request({ url: url, json: true }, (error,response) => {
    console.log(response.body.current)
    console.log(`${response.body.current.weather_descriptions[0]}.It is currently ${response.body.current.temperature} degrees out, it feels like ${response.body.current.feelslike} degress out`)
})