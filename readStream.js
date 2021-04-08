const fs = require('fs');

const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'UTF-8');

let fileTxt = '';
readStream.on('data', (data) => {  
  fileTxt += data; 
  process.stdout.write(`I have read ${fileTxt.length -1} characters of text \n`);
});

readStream.once('data', data => {
    process.stdout.write(`Data1: ${data}`);
});

readStream.on('end', () => {
  process.stdout.write(`Finished reading file. \n`);
  process.stdout.write(`Total read ${fileTxt.length} characters of text. \n`);

});