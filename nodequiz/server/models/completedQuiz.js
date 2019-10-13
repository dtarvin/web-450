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
    employeeId: String,
    quizId: {type: Number},
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String,
    q6: String,
    q7: String,
    q8: String,
    q9: String,
    q10: String
});

module.exports = mongoose.model('CompletedQuiz', CompletedQuizSchema);
