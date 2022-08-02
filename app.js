const { generateOptions } = require('./util')
// generate Salla API Options
const options = generateOptions('/products')

const { requestAPI } = require('./requestAPI');
requestAPI(options, function (err, body) {
    if (err) throw new Error(error);
    // Gete the total pages numbers of all products in Salla API
    global.totalPages = JSON.parse(body).pagination.totalPages;

    // Go through all pages and get all products details
    for (let current_page = 1; current_page <= global.totalPages; current_page++) {

        // get all the data of the current page
        const options = generateOptions(`/products?page=${current_page}`)
        requestAPI(options, function (err, body) {
            if (err) throw new Error(error);
            const APIData = JSON.parse(body).data;

            // get the requied data then store them into execl sheets
            const { productsDetails } = require('./productsDetails');
            productsDetails(APIData, function (err, products) {
                if (err) return console.log(constants.error_message);

            });

        })
    }
})