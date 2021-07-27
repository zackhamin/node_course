const weatherForm = document.querySelector('form')
const searchTerm = document.querySelector('input')

const weatherDisplay = document.querySelector('#weather-display')
const weatherDescription = document.querySelector('#weather-description')
const locationName = document.querySelector('#location-name')
const locationCountry = document.querySelector('#location-country')
const error = document.querySelector('#error')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = searchTerm.value
    fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
        res.json().then((data) => {
            if (data.error) {
                error.textContent = data.error
            } else {
            weatherDisplay.textContent = `Temperature is: ${data.weather} degrees`
            weatherDescription.textContent = data.description
            locationName.textContent = data.locationName
            locationCountry.textContent = data.locationCountry
         } })
    }).catch((err) => {
        console.log(err)
    })
})