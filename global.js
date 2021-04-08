const path = require('path');

// Node ships with gobal objects('__dirname', '__filename' etc) that can be used in the js file. 
//Some of the examples are
// To Check the Dir name and Path Name of our file
console.log('The Directory of the current file--->>>>>>>', __dirname);
console.log('The file path of the current file---->>>>>>', __filename);

// Reading 'path name' of the file using 'require' function
console.log('Reading path name of the file using Require function----->>>>>>', path.basename(__filename));
