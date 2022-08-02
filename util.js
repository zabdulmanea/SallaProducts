const constants = require('./constants')
require('dotenv').config()

const generateOptions = (_path) => {
    return options = {
        method: constants.method,
        url: constants.url + _path,
        // qs: { per_page: '1000' },
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.SALLA_ACCESS_TOKEN}`
        }
    }
}

module.exports = { generateOptions }