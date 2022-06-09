const express = require("express"),
  router = express.Router(),
  { Quiz } = require("../models");

  // GET
router.get("/", async (req, res) => {
  const quizzes = await Quiz.findAll();
  res.json(quizzes);
});

// CREATE
router.post("/", async (req, res) => {
  const { name } = req.body;
  const quiz = await Quiz.create({ name });
  res.json(quiz);
});

// READ
router.get("/:id", async (req, res) => {
  const quiz = await Quiz.findByPk(req.params.id);
  res.json(quiz);
});

// UPDATE
router.post("/:id", async (req, res) => {
  const { name } = req.body;
  const id = req.params.id;
  const quiz = await Quiz.update({ name }, { where: { id } });
  res.json(quiz);
});

//DELETE
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deleted = await Quiz.destroy({
    where: { id },
  });
  res.json({ deleted });
});

module.exports = router;
