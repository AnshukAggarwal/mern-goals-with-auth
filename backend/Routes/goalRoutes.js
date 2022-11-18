const express = require("express");
const router = express.Router();
const {
  getGoals,
  addGoal,
  editGoal,
  deleteGoal,
} = require("../Controllers/goalControllers.js");

const secure = require("../middlewares/authmiddleware");

router.get("/", secure, getGoals);
router.post("/add", secure, addGoal);
router.put("/edit/:id", secure, editGoal);
router.delete("/delete/:id", secure, deleteGoal);

module.exports = router;
