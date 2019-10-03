const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    quizId: {type: Number, required: true},
    questions: [{
        questionNumber: {type: Number},
        questionText: {type: String},
        answers: [{
            answerLetter: {type: String},
            answerText: {type: String},
            isCorrect: {type: Boolean}
        }]
    }]
})

module.exports = mongoose.model('Quiz', QuizSchema);