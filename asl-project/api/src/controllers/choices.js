const express = require("express"),
  router = express.Router(),
  { Choice } = require("../models");

// GET
router.get("/", async (req, res) => {
  const choices = await Choice.findAll();
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(choices);
  } else {
    res.render("choice/index", { title: "Choices", choices });
  }
});

// CREATE path
router.get("/new", (req, res) => {
  res.render("choice/create", { title: "Create Choice" });
});

// CREATE
router.post("/", async (req, res) => {
  const { choiceText } = req.body,
    c = await Choice.create({ choiceText });
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(c);
  } else {
    res.redirect("/choices/" + c.id);
  }
});

// READ
router.get("/:id", async (req, res) => {
  const c = await Choice.findByPk(req.params.id);
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(c);
  } else {
    res.render("choice/show", { choice: c });
  }
});

// UPDATE path
router.get("/:id/edit", async (req, res) => {
  const choice = await Choice.findByPk(req.params.id);
  res.render("choice/edit", {
    choice: choice,
    title: "Edit Choice: " + choice.id,
  });
});

// UPDATE
router.post("/:id", async (req, res) => {
  const { choiceText } = req.body,
    id = req.params.id,
    c = await Choice.update({ choiceText }, { where: { id } });
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(c);
  } else {
    res.redirect("/choices/" + id);
  }
});

//DELETE
router.get("/:id/delete", async (req, res) => {
  const id = req.params.id;
  await Choice.destroy({
    where: { id },
  });
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json({ Success: true });
  } else {
    res.redirect("/choices");
  }
});

module.exports = router;
