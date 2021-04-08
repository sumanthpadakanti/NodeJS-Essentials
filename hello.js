const fs = require('fs');
const path = 'hello.txt';
fs.writeFile(path, 'Hello workd!', (err) => {
    if(err) throw err;
})