# List Salla Store Products 
###### Extract Data from Salla's APIs
----

## Task Overview

> You will intercat with Salla API to get list of store products. You will then generate an execel file sheets contain Products Details. 

This task is guided by Development Department from San International Co.


## APIs and Package Modules Used

* **Salla's APIs - v2** used to retrive products details from merchant's store.
    - [List Products API](https://docs.salla.dev/docs/merchant/70013e48abfe8-list-products)
* **fs module** used to access and interact with the file system
    - There's no need to install it
* **dotenv package** used to allow environment variable usable inside your project
    - To install run: `npm i dotenv`
* **request package** used to make http/https calls.
    - To install run: `npm install request`
* **xlsx package** used to manage spreadsheets.
    - To install run: `npm install xlsx`

## Files Included

| File | Description |
|------|-------------|
| **app.js** | the main node app to get Salla API data then generates Work Sheets file |
| **constants.js** | store some common constant strings that you'll use in Salla API |
| **util.js** | create a centeral function that can be invoked to generate Salla API requested options|
| **requestAPI.js** | create a function that can be invoked to request Salla API products |
| **productsDetails.js** | create a function that can be invoked to generate specific `JSON varaible` contain sheet data |
| **createFile.js** | create new empty Execl file `products.xlsx` and delete any exists files |
| **wsController.js** | control Work Sheets by: <br /> 1. create `appendWorksheet` function to append sheet contains products details inside `JSON varaible` <br /> 2. delete `deleteWorksheet` function to delete a sheet with a known name |

## Getting Started
1. Install NodeJS from [NodeJS Website](https://nodejs.org/en/)
2. Clone/Download this repo: https://github.com/zabdulmanea/SallaProducts.git
3. Create `.env` file contains `SALLA_ACCESS_TOKEN=<Your_Access_Token_Here>` inside root project 
3. run `node app.js` in CLI
4. `products.xlsx` file will be generated inside `output` folder


## Attributions
* [Salla APIs Documentation](https://docs.salla.dev/)
* [Salla Partners](https://salla.partners/)
* [Salla Developers](https://salla.dev/tutorials)
* [NodeJS](https://nodejs.org/en/)
* [npm Node Package Manager)](https://npmjs.com/)
