const exp = require('constants')
const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname,'../public')))

app.get('/weather', (req, res) =>{
    res.send({
        weather: "Sunny",
        location: "Rochdales"
    })
})

app.listen(3000, () => {
    console.log("Listening to you breathe")
}) 