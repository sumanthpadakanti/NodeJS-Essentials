const cp = require('child_process');

// cp.exec("open http://www.gooogle.com");

//cp.exec("open -a Terminal .");

//example 3
/**********This is used to list all files in the 'dir'***************/
// cp.exec('dir', (err, data, stderr) => {
//     //if cmd command is wrong it will print error in the console.
//     console.log(stderr);
// });

//example 4
/**********The below command will execute 'readStream.js' file***************/
cp.exec('node readStream', (err, data, stderr) => {
    console.log(data);
});