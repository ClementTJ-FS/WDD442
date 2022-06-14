const express = require("express"),
  app = express(),
  quizzesCtrl = require("./src/controllers/quizzes"),
  questionsCtrl = require("./src/controllers/questions"),
  choicesCtrl = require("./src/controllers/choices"),
  eta = require("eta");

// Built in body-parser
app.use(express.urlencoded({ extended: true }));

// Template engine. - Eta
app.engine("eta", eta.renderFile);
app.set("view engine", "eta");
app.set("views", __dirname + "/src/views");

// GET / HTTP/1.1
app.get("/", (req, res) => {
  res.render("home/home", { title: "Home" });
});

app.use("/quizzes", quizzesCtrl);
app.use("/questions", questionsCtrl);
app.use("/choices", choicesCtrl);

app.listen(3000);
