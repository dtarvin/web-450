/*
; ============================================
; Title:  completedQuiz.js
; Author: David Tarvin
; Date:   8 Oct 2019
; Description: NodeQuiz
;=============================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompletedQuizSchema = new Schema({
    quizId: {type: Number},
    name: {type: String, required: true},
    employeeId: {type: String, required: true},
    score: {type: Number},
    questions: [{
        questionNumber: {type: Number},
        questionText: {type: String},
        answers: [{
            givenAnswer: {type: String},
            correctAnswer: {type: String},
            gotRight: {type: Boolean}
        }]
    }]
})

module.exports = mongoose.model('CompletedQuiz', CompletedQuizSchema);
