// generate Salla API Options
const { generateOptions } = require('./util')
const options = generateOptions('/products')
const filePath = './output/products.xlsx';
const { requestAPI } = require('./requestAPI');
requestAPI(options, function (err, body) {
    if (err) throw new Error(error);
    // Gete the pages numbers of all products from API
    global.totalPages = JSON.parse(body).pagination.totalPages;

    // Go through all pages and get all products details
    for (let current_page = 1; current_page <= global.totalPages; current_page++) {

        // initialize an execel file and delete any previous 
        if (current_page == 1) {
            const createFile = require('./createFile')
            createFile(filePath)
        }

        // get all the data of the current page
        const options = generateOptions(`/products?page=${current_page}`)
        requestAPI(options, function (err, body) {
            if (err) throw new Error(error);
            const APIData = JSON.parse(body).data;

            // get specific data then store them into execl sheets
            const { productsDetails } = require('./productsDetails');
            productsDetails(APIData, function (err, products) {
                const constants = require('./constants');
                if (err) return console.log(constants.error_message);

                // append new sheet
                const sheetsController = require('./wsController')
                const workSheetName = `Page ${current_page}`;
                sheetsController.appendWorksheet(filePath, products, workSheetName);

                // delete default sheet (sheet1)
                if (current_page == 1) {
                    sheetsController.deleteWorksheet(filePath, 'Sheet1');
                }
            });
        });
    }
})