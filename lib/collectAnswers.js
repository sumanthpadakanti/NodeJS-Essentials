const readLine = require('readline');
const event = require('events');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
const emitter = new event.EventEmitter();

module.exports = (questions, done) => {
   const answers = [];
   const [firstQuestion] = questions;

   const questionAnswered = answer => {
    emitter.emit('answer', answer);
    answers.push(answer);   
    if(answers.length < questions.length) {
        rl.question(questions[answers.length], questionAnswered);
       }else {
           emitter.emit('complete', answers);
           done(answers);
       }
   }
   
   rl.question(firstQuestion, questionAnswered);
   return emitter;
}
