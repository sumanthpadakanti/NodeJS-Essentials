const cp = require('child_process');

const questionApp = cp.spawn('node', ['QandA.js']);

questionApp.stdin.write('Sumanth \n');
questionApp.stdin.write('Mclean \n');
questionApp.stdin.write('NodeJS \n');

questionApp.stdout.on('data', data => {
    console.log(`${data}`);
})

questionApp.on("close", () => {
    console.log(`**** QuestionApp Process completed ******`);
})