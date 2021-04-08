const fs = require('fs');

const writeStream = fs.createWriteStream('./storage/fileTxt.txt', 'UTF-8');
const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'UTF-8');

/******Multiple ways to write data to file********/
//Example 1
writeStream.write('Sumanth Padakanti \n');

//Example 2
// console.log(`***** Type Data in terminal to save to 'fileTxt.txt' file in 'assets' folder. 
// Press Enter and type 'exit' anytime to exit from terminal. ******`);

// process.stdin.on('data', data => {
// const inputVal = data.toString().trim();
//     if(inputVal == 'exit') {
//         process.exit();
//     } 
//     writeStream.write(inputVal);
// });

//Example3
// console.log(`********Sending data from readStream file to writeStream file.****************`)
// readStream.on('data', data => {
//     writeStream.write(data);
  
// });

//Example 4
console.log(`********One more way of senidng data from readStream to writeStream***************`);
readStream.pipe(writeStream);