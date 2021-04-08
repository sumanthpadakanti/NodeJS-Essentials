//1. similar to 'console.log' we can user 'process.stdout.write' to print the messages in terminal
// Advantages
// 1. console.log takes prints output in 'entire line', stdout.write prints the output 'inline'.
// 2. more control over the terminal

//Below code prints the output in one line
// process.stdout.write('Hello ');
// process.stdout.write('Welcome to Node JS.  \n'); 

// 2. Implementing question and answer from terminal
const questions = [
    'Whats your name?',
    'whats your skills set?',
    'Which programming language do you like?'
];

const ask = (i=0) => {
    process.stdout.write(`${questions[i]}`);
    process.stdout.write(`>`);
}

ask();

const answers = [];

process.stdin.on('data', data => {
   answers.push(data.toString().trim());
   if(answers.length < questions.length) {
       ask(answers.length);
   }else {
       process.exit();
   }
});

process.on('exit', () => {
    process.stdout.write(`Hello ${answers[0]}, your skills are ${answers[1]} and ` +
    `your fav lang is ${answers[2]}`);
});
