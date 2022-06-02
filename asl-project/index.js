const express = require("express"),
  app = express(),
  quizzesCtrl = require("./src/controllers/quizzes"),
  questionCtrl = require("./src/controllers/questions"),
  choicesCtrl = require("./src/controllers/choices");

// Built in body-parser
app.use(express.urlencoded({ extended: true }));

// GET / HTTP/1.1
app.get("/", (req, res) => {
  res.send("Home Page GET");
});

app.use("/quizzes", quizzesCtrl);
app.use("/questions", questionCtrl);
app.use("/choices", choicesCtrl);

app.listen(3000);
