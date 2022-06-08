const express = require("express"),
  router = express.Router(),
  { Choice } = require("../models");


  // GET
  router.get("/", async (req, res) => {
    const choices = await Choice.findAll();
    res.json(choices);
  });
  
  // CREATE
  router.post("/", async (req, res) => {
    const { choiceText } = req.body;
    const c = await Choice.create({ choiceText });
    res.json(c);
  });
  
  // READ
  router.get("/:id", async (req, res) => {
    const c = await Choice.findByPk(req.params.id);
    res.json(c);
  });
  
  // UPDATE
  router.post("/:id", async (req, res) => {
    const { choiceText } = req.body;
    const id = req.params.id;
    const c = await Choice.update({ choiceText }, { where: { id } });
    res.json(c);
  });
  
  //DELETE
  router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deleted = await Choice.destroy({
      where: { id },
    });
    // res.json({ deleted });
    if (deleted) {
      res.redirect("/choices");
    }
  });

module.exports = router;
