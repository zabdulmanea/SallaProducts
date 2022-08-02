// request API data then return the body
const request = require('request');

function requestAPI(options, callback) {
    request(options, function (error, response, body) {
        if (error) return callback(error);
        callback(null, body);
    })
}

module.exports = { requestAPI }