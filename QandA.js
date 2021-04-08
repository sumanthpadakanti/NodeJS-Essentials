const collectAnswers = require('./lib/collectAnswers');

const questions = [
    'Whats your name?',
    'where do you live?',
    'Which programming language do you like?'   
];

const answerEvents = collectAnswers(questions);

answerEvents.on('answer', answer => {
    console.log(` ${answer}`);
});

answerEvents.on('complete', answers => {
    process.stdout.write('Thank you for your answers.');
    process.stdout.write(`${answers}`);
});

answerEvents.on('complete', () => {
    process.exit();
});

