/*
; ============================================
; Title:  quiz.js
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    quizId: {type: Number},
    name: {type: String},
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
