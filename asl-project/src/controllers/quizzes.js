const express = require("express"),
  router = express.Router(),
  { Quiz, Question, Choice } = require("../models");

// GET
router.get("/", async (req, res) => {
  const quizzes = await Quiz.findAll({
    include: [{ model: Question, include: [Choice] }],
  });
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(quizzes);
  } else {
    res.render("quiz/index", { title: "Quizzes", quizzes });
  }
});

// CREATE path
router.get("/new", (req, res) => {
  res.render("quiz/create", { title: "Create Quiz" });
});

// CREATE
router.post("/", async (req, res) => {
  const { name, weight } = req.body,
    quiz = await Quiz.create({ name, weight });
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(quiz);
  } else {
    res.redirect("/quizzes/" + quiz.id);
  }
});

// READ
router.get("/:id", async (req, res) => {
  const quiz = await Quiz.findByPk(req.params.id, {
    include: [{ model: Question, include: [Choice] }],
  });
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(quiz);
  } else {
    res.render("quiz/show", { quiz });
  }
});

// UPDATE path
router.get("/:id/edit", async (req, res) => {
  const quiz = await Quiz.findByPk(req.params.id);
  res.render("quiz/edit", { quiz: quiz, title: "Edit Quiz: " + quiz.id });
});

// UPDATE
router.post("/:id", async (req, res) => {
  const { name, weight } = req.body,
    id = req.params.id,
    quiz = await Quiz.update({ name, weight }, { where: { id } });
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(quiz);
  } else {
    res.redirect("/quizzes/" + id);
  }
});

// DELETE
router.get("/:id/delete", async (req, res) => {
  const id = req.params.id;
  await Quiz.destroy({
    where: { id },
  });
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json({ Success: true });
  } else {
    res.redirect("/quizzes");
  }
});

module.exports = router;
