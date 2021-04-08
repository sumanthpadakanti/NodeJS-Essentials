/**********To execute this file we need to have 'colors.json', 'Readme.md', and 'notes.md' 
 * in assests folder***************/

const fs = require('fs');

fs.renameSync('./assets/colors.json', './assets/colorsData.json');

fs.rename('./assets/Readme.md', './storage/Readme.md', err => {
    if(err) {
        throw err;
    }
});
fs.rename('./assets/notes.md', './storage/notes.md', err => {
    if(err) {
        throw err;
    }
});

setTimeout(() => {
  fs.unlinkSync('./assets/alex.jpg')
}, 4000);
