const express = require("express"),
  router = express.Router();
let questions = require("../models/questions");

router.get("/", (req, res) => {
  res.json(questions);
});
router.post("/", (req, res) => {
  const {id,question} = req.body
  questions.push({
    id: Number(id),
    question
  })
  res.json(questions);
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const question = questions.find((q) => q.id == id);
  res.json(question);
});
router.post("/:id", (req, res) => {
  const id = Number(req.params.id)
  questions.map(q=>{
    if (id === q.id) {
      q.question = req.body.question
    } 
    return q
  })
  res.json(questions);
});
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id)
  questions = questions.filter(q => q.id !== id)
  res.json(questions);
});

module.exports = router;
