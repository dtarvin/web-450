/*
; ============================================
; Title:  app.js
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   26 Sep 2019
; Description: NodeQuiz
;=============================================
*/

const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user');
const Quiz = require('./models/quiz');
const config = require('./helpers/config');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../dist/nodequiz')));
app.use('/', express.static(path.join(__dirname, '../dist/nodequiz')));

// Global variables
const serverPort = process.env.PORT || 3000; // server port

/************************* Mongoose connection strings go below this line  ***************/
const connString = 'mongodb+srv://'
                    + config.database.username + ':'
                    + config.database.password + '@'
                    + config.database.url + '/'
                    + config.database.name
                    + '?retryWrites=true&w=majority';

mongoose.connect(connString, {promiseLibrary:require('bluebird'), useNewUrlParser: true})
        .then(() => console.debug('Connection to the MongoDB instance was successful!'))
        .catch((err) => console.debug('MongoDB Error: ' + err.message));

/************************* API routes go below this line ********************/
app.post('/api/users', function(req, res, next) {
  const user = {
    employeeId: req.body.employeeId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    runningAverage: req.body.runningAverage
  };

  User.create(user, function(err, users) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(users);
      res.json(users);
    }
  })
})

app.get('/api/users', function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(users);
      res.json(users);
    }
  })
})

app.get('/api/users/:id', function(req, res, next) {
  User.findOne({'employeeId':req.params.id}, function(err, users) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(users);
      res.json(users);
    }
  })
})

app.get('/api/quizzes', function(req, res, next) {
  Quiz.find({}, function(err, quizzes) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(quizzes);
      res.json(quizzes);
    }
  })
})

app.get('api/quizzes/:name', function(req, res, next) {
  Quiz.findOne({'quizName':req.params.name}, function(err, quizzes) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(quizzes);
      res.json(quizzes);
    }
  })
})

// app.get('/api/quizzes/:id', function(req, res, next) {
//   Quiz.findOne({'quizId': req.params.id}, function(err, quiz) {
//     if (err) {
//       console.log(err);
//       return next(err);
//     }  else {
//       console.log(quiz);
//       res.json(quiz);
//     }
//   })
// });
// app.post("/process", function(request, response) {
//   // console.log(request.body.txtName);
//   if(!request.body.employeeId || !request.body.name) {
//     response.status(400).send("Entries must have an employeeId and a quiz name");
//     return;
//   }

//   const quizId = request.body.quizId;
//   const name = request.body.name;

// Quiz.create(quiz, function(err, quizzes) {
//   if (err) {
//     console.log(err);
//     return next(err);
//   } else {
//     console.log(quizzes);
//     res.json(quizzes);
//   }
// })

/*************** Quiz Results API *******************************************/

// Create Quiz Result
app.post('/api/results', function(req, res, next) {
  const result = {
    employeeId: req.body.employeeId,
    quizId: req.body.quizId,
    result: req.body.result
  };

  Result.create(result, function(err, results) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(results);
      res.json(results);
    }
  });
});


//   const newEmployee = new Employee({ firstName, lastName });
//   newEmployee.save(function(error) {
//     if (error) throw error;
//     console.log(firstName + ' ' + lastName + ' saved successfully!');
//   });
//   response.redirect("/");
// });
/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});
