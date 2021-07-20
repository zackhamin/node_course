const yargs = require('yargs')
const geoLocation = require('./utils/geocode')
const getWeather = require('./utils/getTemperature')

const locationInput = process.argv[2]
if(!locationInput){
    console.log("No location given")
} else {
    geoLocation(locationInput, (error, response) => {
        if (error) {
         return console.log(error)
        }
        getWeather(response.latitude,response.longitude,(error, response) => {
          if(error){
              return console.log(error)
          }  
            console.log(`The current temperature is ${response.temperature}, but it feels like ${response.feelsLike}`)
            console.log(response.locationName)
            console.log(response.locationCountry)
            console.log(response.description)
        })
    })
    
}
