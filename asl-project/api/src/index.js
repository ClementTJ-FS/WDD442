const express = require('express'),
  app = express(),
  quizzesCtrl = require('./controllers/quizzes'),
  questionsCtrl = require('./controllers/questions'),
  choicesCtrl = require('./controllers/choices'),
  authCtrl = require('./controllers/auth'),
  eta = require('eta'),
  session = require('express-session'),
  cors = require('cors'),
  path = require('path'),
  { isAuthed } = require('./middlewares/auth');

app.use(
  session({
    saveUninitialized: false,
    secret: 'keyboard cat',
    resave: false,
    cookie: {
      maxAge: 60000,
    },
    unset: 'destroy',
  })
);
// Built in body-parser
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Template engine. - Eta
// app.engine('eta', eta.renderFile);
// app.set('view engine', 'eta');
// app.set('views', __dirname + '/src/views');

//cors
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowCrossDomain: true,
  })
);

// controllers
app.use('/quizzes', isAuthed, quizzesCtrl);
app.use('/questions', isAuthed, questionsCtrl);
app.use('/choices', isAuthed, choicesCtrl);
app.use('/auth', authCtrl);

// path to react build
app.use(express.static(path.join(__dirname, '../../reactapp/build')));

//the home page
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../../reactapp/build', 'index.html'));
});

//error handling middleware
app.use((req, res, next) => {
  const error = new Error('Not Found!');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
    },
  });
});

module.exports = app;
