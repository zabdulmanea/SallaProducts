// Requiring module
const xlsx = require('xlsx');

const appendWorksheet = (filePath, JSONData, workSheetName) => {
    const workBook = xlsx.readFile(filePath)
    const workSheet = xlsx.utils.json_to_sheet(JSONData)
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName)
    xlsx.writeFile(workBook, filePath)
    console.log(`${workSheetName} Appended successfully!!`)
}

const deleteWorksheet = (filePath, workSheetName) => {
    const workBook = xlsx.readFile(filePath);
    const workSheetNames = Object.keys(workBook.Sheets);

    if (workSheetNames.includes(workSheetName)) {
        delete workBook.Sheets[workSheetName];
        delete workBook.SheetNames[workSheetName];
        indexToDelete = workBook.SheetNames.indexOf(workSheetName);
        workBook.SheetNames.splice(indexToDelete, 1);
        xlsx.writeFile(workBook, filePath);
        console.log(`${workSheetName} Deleted successfully!!`)
    }
}

module.exports = { appendWorksheet, deleteWorksheet };
