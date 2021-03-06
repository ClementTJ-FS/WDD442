const express = require("express"),
  app = express(),
  quizzesCtrl = require("./src/controllers/quizzes"),
  questionsCtrl = require("./src/controllers/questions"),
  choicesCtrl = require("./src/controllers/choices"),
  authCtrl = require("./src/controllers/auth"),
  eta = require("eta"),
  session = require("express-session"),
  cors = require("cors"),
  { isAuthed } = require("./src/middlewares/auth");

app.use(
  session({
    saveUninitialized: false,
    secret: "keyboard cat",
    resave: false,
    cookie: {
      maxAge: 60000,
    },
    unset: "destroy",
  })
);
// Built in body-parser
app.use(express.urlencoded({ extended: true }));

// Template engine. - Eta
app.engine("eta", eta.renderFile);
app.set("view engine", "eta");
app.set("views", __dirname + "/src/views");

//cors
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  "credentials": true,
  "allowCrossDomain": true
}))

// GET / HTTP/1.1
app.get("/", (req, res, next) => {
  res.redirect("/quizzes");
});

// controllers
app.use("/quizzes", isAuthed, quizzesCtrl);
app.use("/questions", isAuthed, questionsCtrl);
app.use("/choices", isAuthed, choicesCtrl);
app.use("/auth", authCtrl);



app.listen(3000);
