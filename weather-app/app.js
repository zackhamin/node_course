const request = require('postman-request')
const geoLocation = require('./utils/geocode')

const tokenMapBox = 'pk.eyJ1IjoiemFjay1kZXYiLCJhIjoiY2tyYnR3Z21vNHRjajJ1cWgzMmJ0OThoZyJ9.L4Mn51s-Vw3k5WxXerDSjA'

const url = 'http://api.weatherstack.com/current?access_key=eec85e3060c6743049f9ee58abbf936b&query=Rochdale'

// request({ url: url, json: true }, (error,response) => {
//     if (error) {
//         console.log("Network error")
//     } else if(response.body.error) {
//         console.log("User input error")
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}.It is currently ${response.body.current.temperature} degrees out, it feels like ${response.body.current.feelslike} degress out`)
//     }
// })


geoLocation("Blackpool", (error, response) => {
    console.log(error)
    console.log(response)
})