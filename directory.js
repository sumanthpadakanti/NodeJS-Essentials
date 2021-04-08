const fs = require('fs');

process.stdout.write(`Enter the Directory name > `);

process.stdin.on('data', input => {
    inputVal = input.toString().trim();
    
    if(fs.existsSync(inputVal) == true) {
        process.stdout.write(`Folder ${inputVal} already exists.`);
        process.stdout.write(`\n Enter the Directory name > `);
    }else {
        fs.mkdir(inputVal, err => {
            if(err) {
            throw err;
            }
        });
        process.stdout.write(`Directory ${inputVal} created.`);
        process.exit();
    }
})