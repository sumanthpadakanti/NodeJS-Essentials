//1. one of the global object in node js is the 'Process Object'
 console.log(`this is process object---->>>>`, process);

//2. 'process.argv' gives the list of arguments(like 'node path' and 'file location' initially) in form of array
 console.log(`this is process object---->>>>`, process.argv);

//3. we can add arguments to process.argv
// Step1: In the terminal type --->>>>> node processGlobal('this is the file name') Sumanth Padakanti('added 2 args Sumanth and Padakanti')
// Step2: Since process.argv is an array we can do destructing in the JS file [,, firstName, lastName] = process.argv;

 [,, firstName, lastName] = process.argv;
 console.log(`My firstName is ${firstName} and my lastName is ${lastName} \n\n`);

//4. We can add flags to process object and use the flags when needed
// step1: execute this in the terminal 
// node processGlobal --user "Sumanth Padakanti" --greeting "Welcome to NodeJS"
grab = (val) => {
   // process.argv is array 
  const indexOfFlag = process.argv.indexOf(val) +1;
  return process.argv[indexOfFlag];
};

const name = grab('--user');
const greeting = grab('--greeting');
 console.log(`Hell0 ${name}, ${greeting}. \n`);