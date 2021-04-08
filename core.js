const { relative } = require('path');
const path = require('path');
const util = require('util');
const v8 = require('v8');

const dirPath =  path.join(__dirname, 'NODEJS');
const getSysStatistics = v8.getHeapStatistics();
// gives Dir path from util. *The Advantage from util.log is that its gives 'timestamp' in the terminal.
util.log('dirPath from util-->>', dirPath)
console.log('dirPath', dirPath); 
console.log('sys stats', getSysStatistics);
