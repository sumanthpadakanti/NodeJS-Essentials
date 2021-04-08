const fs = require('fs');
const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('inputFromTerminal', (inputVal, fileType) => {
    fs.readFile(inputVal, fileType, (err, fileContent) => {
        if(err) {
            throw err;
          }
        process.stdout.write(`fileContent: ${fileContent} \n`);
        process.exit();
      });
});

process.stdout.write(`Enter file name from 'assets folder' >`);
process.stdin.on('data', input => {
    const inputVal = './assets/' + input.toString().trim();
    let fileType = '';
    if(!inputVal.includes('.jpg') && !inputVal.includes('.png') && !inputVal.includes('.jpeg')) {
        fileType = 'UTF-8'
    }
    emitter.emit('inputFromTerminal', inputVal, fileType);

});