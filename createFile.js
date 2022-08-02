const fs = require('fs')

const createFile = (filePath) => {
    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        fs.open(filePath, 'w', function (err, file) {
            if (err) throw err;
            console.log('Empty File Created successfully!');
        });

    } catch (err) {
        console.error(err)
    }
}

module.exports = createFile;
