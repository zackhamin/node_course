const geoLocation = require('../src/utils/geocode')
const getWeather = require('../src/utils/getTemperature')

const hbs = require('hbs')
const express = require('express')
const path = require('path')

//Define path for express config
const app = express()
const port = process.env.PORT || 3000

const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath)

//Set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//Setup static directory to serve
app.use(express.static(publicPath))

const name = "Ishaq Amin"

app.get('',(req,res) => {
    res.render('index', {
        title: 'Weather App',
        footer: `Created by ${name}`
    })
})

app.get('/about',(req,res) => {
    res.render('about', {
        title: "About",
        footer: `Created by ${name}`
    })
})

app.get('/help',(req,res) => {
    res.render('help', {
        title: 'Help',
        footer: `Created by ${name}`
    })
})

app.get('/weather', (req, res) =>{
    const address = req.query.address
    if (!address) {
        return res.send("No Address given ")
    } else {
    geoLocation(address, (error, {latitude, longitude} = {}) => {
        if (error) {
         return res.send({error}).status(404)
        }
        getWeather(latitude,longitude,(error, response) => {
          if(error){
            return res.send({error}).status(404)
          }  
    res.send({
        weather: response.temperature,
        locationName: response.locationName,
        locationCountry: response.locationCountry,
        description: response.description
    })
})})}})

app.get('/help/*',(req,res) => {
    res.render('404', {
        title:'404',
        errorMessage: "404 Help article not found",
        footer: `Created by ${name}`
    })
})

app.get('*',(req,res) => {
    res.render('404', {
       title:'404',
       errorMessage: "404 Page not found",
       footer: `Created by ${name}`
    })
})

app.listen(port, () => {
    console.log(`Listening to you breathe on port ${port}`)
}) 