const express = require("express"),
  router = express.Router(),
  { Quiz } = require("../models");

// GET
router.get("/", async (req, res) => {
  const quizzes = await Quiz.findAll();
  res.render("quiz/index", { title: "Quizzes", quizzes });
});

// CREATE path
router.get("/new", (req, res) => {
  res.render("quiz/create", { title: "Create Quiz" });
});

// CREATE
router.post("/", async (req, res) => {
  const { name, weight } = req.body,
    quiz = await Quiz.create({ name, weight });
  res.redirect("/quizzes/" + quiz.id);
});

// READ
router.get("/:id", async (req, res) => {
  const quiz = await Quiz.findByPk(req.params.id);
  res.render("quiz/show", { quiz });
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
  res.redirect("/quizzes/" + id);
});

// DELETE
router.get("/:id/delete", async (req, res) => {
  const id = req.params.id;
  await Quiz.destroy({
    where: { id },
  });
  res.redirect("/quizzes");
});

module.exports = router;
