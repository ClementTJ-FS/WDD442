const express = require("express"),
  router = express.Router(),
  { Quiz } = require("../models"),
  { isAuthed } = require("../middlewares/auth");

// GET
router.get("/", isAuthed, async (req, res) => {
  const quizzes = await Quiz.findAll();
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(quizzes);
  } else {
    res.render("quiz/index", { title: "Quizzes", quizzes });
  }
});

// CREATE path
router.get("/new", isAuthed, (req, res) => {
  res.render("quiz/create", { title: "Create Quiz" });
});

// CREATE
router.post("/", isAuthed, async (req, res) => {
  const { name, weight } = req.body,
    quiz = await Quiz.create({ name, weight });
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(quiz);
  } else {
    res.redirect("/quizzes/" + quiz.id);
  }
});

// READ
router.get("/:id", isAuthed, async (req, res) => {
  const quiz = await Quiz.findByPk(req.params.id);
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(quiz);
  } else {
    res.render("quiz/show", { quiz });
  }
});

// UPDATE path
router.get("/:id/edit", isAuthed, async (req, res) => {
  const quiz = await Quiz.findByPk(req.params.id);
  res.render("quiz/edit", { quiz: quiz, title: "Edit Quiz: " + quiz.id });
});

// UPDATE
router.post("/:id", isAuthed, async (req, res) => {
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
router.get("/:id/delete", isAuthed, async (req, res) => {
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
