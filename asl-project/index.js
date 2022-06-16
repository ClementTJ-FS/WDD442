const express = require("express"),
  app = express(),
  quizzesCtrl = require("./src/controllers/quizzes"),
  questionsCtrl = require("./src/controllers/questions"),
  choicesCtrl = require("./src/controllers/choices"),
  authCtrl = require("./src/controllers/auth"),
  eta = require("eta"),
  session = require("express-session"),
  { isAuthed } = require("./src/middlewares/auth");

app.use(
  session({
    saveUninitialized: false,
    secret: "keyboard cat",
    resave: false,
    cookie: {
      maxAge: 60000,
    },
  })
);
// Built in body-parser
app.use(express.urlencoded({ extended: true }));

// Template engine. - Eta
app.engine("eta", eta.renderFile);
app.set("view engine", "eta");
app.set("views", __dirname + "/src/views");

// GET / HTTP/1.1
app.get("/", (req, res, next) => {
  res.render("home/home", { title: "Home" });
});

// controllers
app.use("/quizzes", isAuthed, quizzesCtrl);
app.use("/questions", isAuthed, questionsCtrl);
app.use("/choices", isAuthed, choicesCtrl);
app.use("/auth", authCtrl);

app.listen(3000);
