const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../Controllers/userContoller");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getUser);

module.exports = router;
