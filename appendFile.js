const fs = require('fs');
const colorsData = require('./assets/colors.json');

colorsData.colorList.forEach(val => {
    fs.appendFile('./storage/appendedFile.md', `${val.color} : ${val.hex} \n`, err => {
        if(err) {
            throw err;
        }
    });    
});
