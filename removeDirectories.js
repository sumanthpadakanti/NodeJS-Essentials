/**********To execute this file we need to create 'dummy' folder and create 
 * few files inside it***************/
const fs = require('fs');

fs.readdirSync('./dummy').forEach(file => {
    fs.unlinkSync(`./dummy/${file}`);
});

fs.rmdir('dummy', (err) => {
    if(err) {
        throw err;
    }
   process.stdout.write('Dummy folder removed successfully.');
})