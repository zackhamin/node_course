const request = require('postman-request')
const tokenMapBox = 'pk.eyJ1IjoiemFjay1kZXYiLCJhIjoiY2tyYnR3Z21vNHRjajJ1cWgzMmJ0OThoZyJ9.L4Mn51s-Vw3k5WxXerDSjA'

const geoLocation = (place,callBack) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(place)}.json?access_token=${tokenMapBox}`
    request({url, json: true}, (error,{ body }) => {
        if (error) {
            callBack("Network error", undefined)
        } else if(body.features.length === 0) {
            callBack("User input error", undefined)
        } else {
           callBack(undefined,{
               latitude: body.features[0].center[1],
               longitude: body.features[0].center[0],
               place: body.features[0].place_name
           })
        }
    })
}

module.exports = geoLocation