const request = require('postman-request')

const tokenMapBox = 'pk.eyJ1IjoiemFjay1kZXYiLCJhIjoiY2tyYnR3Z21vNHRjajJ1cWgzMmJ0OThoZyJ9.L4Mn51s-Vw3k5WxXerDSjA'

const url = 'http://api.weatherstack.com/current?access_key=eec85e3060c6743049f9ee58abbf936b&query=Rochdale'
const place = 'Los Angeles'
const mapURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${tokenMapBox}`
request({url:mapURL, json: true}, (error,response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
})

// request({ url: url, json: true }, (error,response) => {
//     console.log(response.body.current)
//     console.log(`${response.body.current.weather_descriptions[0]}.It is currently ${response.body.current.temperature} degrees out, it feels like ${response.body.current.feelslike} degress out`)
// })