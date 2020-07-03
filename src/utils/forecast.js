const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c49fd425374ed66bf16f4ebe16a13985/'+ latitude + ',' + longitude 

    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + 'Temperature: ' + body.currently.temperature + '° & Visibility: ' + body.currently.visibility)
        }
    })
}


module.exports = forecast

