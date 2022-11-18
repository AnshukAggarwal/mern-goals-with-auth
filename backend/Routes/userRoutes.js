const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../Controllers/userContoller");

const secure = require("../middlewares/authmiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", secure, getUser);

module.exports = router;
