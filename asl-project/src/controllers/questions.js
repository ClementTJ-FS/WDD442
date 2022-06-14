const express = require("express"),
  router = express.Router(),
  { Question, Quiz } = require("../models");

// GET
router.get("/", async (req, res) => {
  const questions = await Question.findAll({
    include: Quiz,
  });
  res.json(questions);
});

// CREATE
router.post("/", async (req, res) => {
  const { questionText } = req.body,
    q = await Question.create({ questionText });
  res.json(q);
});

// READ
router.get("/:id", async (req, res) => {
  const question = await Question.findByPk(req.params.id);
  res.json(question);
});

// UPDATE
router.post("/:id", async (req, res) => {
  const { questionText } = req.body,
    id = req.params.id,
    q = await Question.update({ questionText }, { where: { id } });
  res.json(q);
});

//DELETE
router.delete("/:id", async (req, res) => {
  const id = req.params.id,
    deleted = await Question.destroy({
      where: { id },
    });
  res.json({ deleted });
  // if (deleted) {
  //   res.redirect("/");
  // }
});

module.exports = router;
