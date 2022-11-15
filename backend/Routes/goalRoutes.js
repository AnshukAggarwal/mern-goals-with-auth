const express = require("express");
const router = express.Router();
const {
  getGoals,
  addGoal,
  editGoal,
  deleteGoal,
} = require("../Controllers/goalControllers.js");

router.get("/", getGoals);
router.post("/add", addGoal);
router.put("/edit/:id", editGoal);
router.delete("/delete/:id", deleteGoal);

module.exports = router;
