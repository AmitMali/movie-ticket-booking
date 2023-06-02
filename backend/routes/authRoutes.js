const express = require("express");
const router = express.Router();
const { login, signup } = require("../controllers/authController");
const { encryptPassword } = require("../middlewares/middleware");
router.post("/login", login);
router.post("/signup", encryptPassword, signup);

module.exports = router;
