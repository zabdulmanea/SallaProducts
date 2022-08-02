const { generateOptions } = require('./util')
// generate Salla API Options
const options = generateOptions('/products')

const { requestAPI } = require('./requestAPI');
requestAPI(options, function (err, body) {
    if (err) throw new Error(error);
    // Gete the pages numbers of all products 
    global.totalPages = JSON.parse(body).pagination.totalPages;
})