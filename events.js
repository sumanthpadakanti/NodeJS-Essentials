const events = require('events');

const emitter = new events.EventEmitter();

/*****************************/
// Below 2 Examples will not execute same time. Comment any one example to 
// check the other example functionality.
/*****************************/
process.stdout.write(`**** Type any text in terminal it will return back same text.` + 
  `Type 'exit' to exit from the terminal. ***** \n`);
// Example1
// emitter.on('customEvent', (arg1, arg2) => {
//      process.stdout.write(`${arg1}, ${arg2}`);
// });
// emitter.emit('customEvent', 'Hello', 'whats your name?');

// Example2
emitter.on('readValFromTerminal', (arg1, arg2) => {
    process.stdout.write(`${arg2}: ${arg1} \n`);
    if(arg1 == 'exit') {
      process.exit();
    }
});

process.stdin.on('data', input => {
   const inputVal = input.toString().trim();
   if(inputVal == 'exit') {
       emitter.emit('readValFromTerminal', inputVal, 'process');
   }else {
    emitter.emit('readValFromTerminal', inputVal, 'Terminal');
   }
});