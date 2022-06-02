const express = require("express"),
  router = express.Router();
let choices = require("../models/choices");

router.get("/", (req, res) => {
  res.json(choices);
});
router.post("/", (req, res) => {
  const {id,choice} = req.body
  choices.push({
    id: Number(id),
    choice
  })
  res.json(choices);
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const quiz = choices.find((q) => q.id == id);
  res.json(quiz);
});
router.post("/:id", (req, res) => {
  const id = Number(req.params.id)
  choices.map(q=>{
    if (id === q.id) {
      q.choice = req.body.choice
    } 
    return q
  })
  res.json(choices);
});
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id)
  choices = choices.filter(q => q.id !== id)
  res.json(choices);
});

module.exports = router;
