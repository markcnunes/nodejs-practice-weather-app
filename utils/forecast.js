const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const apiKey = 'YOUR API KEY GOES HERE';
    const url = `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}?units=si`;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            const temperature = Math.round(body.currently.temperature);
            const summary = body.daily.data[0].summary;
            callback(undefined, `${summary} It is currently ${temperature} degrees out. There is a ${body.currently.precipProbability} chance of rain`);
        }
    });
};


module.exports = forecast;