const hbs = require('hbs')
const express = require('express')
const path = require('path')

//Define path for express config
const app = express()
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
    res.send({
        weather: "Sunny",
        location: "Rochdales"
    })
})

app.listen(3000, () => {
    console.log("Listening to you breathe")
}) 