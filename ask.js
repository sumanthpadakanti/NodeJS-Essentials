const readLine = require('readline');


const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(`what's your fav Lang?: `, answer => {
  process.stdout.write(`Your Answer: ${answer}`);
  process.exit();
});