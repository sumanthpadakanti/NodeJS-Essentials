const fs = require('fs');

const data = `
#Data

#This data is passed to this file from writeFile method.
`

fs.writeFile('./assets/notes.md', data, err => {
    if(err) {
        throw err;
    }
    process.stdout.write(`Data copied successfully.`);
});