const express = require("express"),
  router = express.Router(),
  { Question, Quiz } = require("../models");

// GET
router.get("/", async (req, res) => {
  const questions = await Question.findAll({
    include: Quiz,
  });
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(questions);
  } else {
    res.render("question/index", { title: "Questions", questions });
  }
});

// CREATE path
router.get("/new", (req, res) => {
  res.render("question/create", { title: "Create Question" });
});

// CREATE
router.post("/", async (req, res) => {
  const { questionText } = req.body,
    q = await Question.create({ questionText });
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(q);
  } else {
    res.redirect("/questions/" + q.id);
  }
});

// READ
router.get("/:id", async (req, res) => {
  const question = await Question.findByPk(req.params.id);
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(question);
  } else {
    res.render("question/show", { question });
  }
});

// UPDATE path
router.get("/:id/edit", async (req, res) => {
  const question = await Question.findByPk(req.params.id);
  res.render("question/edit", {
    question: question,
    title: "Edit question: " + question.id,
  });
});

// UPDATE
router.post("/:id", async (req, res) => {
  const { questionText } = req.body,
    id = req.params.id,
    q = await Question.update({ questionText }, { where: { id } });
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(q);
  } else {
    res.redirect("/questions/" + id);
  }
});

//DELETE
router.get("/:id/delete", async (req, res) => {
  const id = req.params.id;
  await Question.destroy({
    where: { id },
  });
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json({ Success: true });
  } else {
    res.redirect("/questions");
  }
});

module.exports = router;
