const request = require('request')

const forecast = (city, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=92ebf919d8a5388358f5ca6a3ed836d4&query=' + city

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location!', undefined)
        }     
        else {
            
            callback(undefined, response.body.location.name + ', ' + response.body.location.region + ', ' + response.body.location.country + '. Local time is ' + response.body.location.localtime + '. Weather ' + response.body.current.weather_descriptions[0] + '. Actual Temp: ' + response.body.current.temperature + ' celsius. Humidity: ' + response.body.current.humidity + ' grados')
        }
    })
}

module.exports = forecast