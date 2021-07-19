const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=eec85e3060c6743049f9ee58abbf936b&query=Rochdale'

request({ url: url }, (error,response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})