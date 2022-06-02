const express = require("express"),
  app = express(),
  quizzesCtrl = require("./src/controllers/quizzes");

// Built in body-parser
app.use(express.urlencoded({ extended: true }));

// GET / HTTP/1.1
app.get("/", (req, res) => {
  res.send("Home Page GET");
});

app.use("/quizzes", quizzesCtrl);

app.listen(3000);
