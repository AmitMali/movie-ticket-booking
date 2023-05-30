const { createUserDB } = require("../db/db");
const { validateUser } = require("../services/authService");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const login = (req, res) => {
  const user = validateUser(req.body.email, req.body.password);
  if (user) {
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.status(200).json({
      message: "user logged in successfully",
      token,
    });
  } else {
    res.status(401).json({
      message: "login failed",
    });
  }
};
const signup = (req, res) => {
  try {
    createUserDB(req.body);
    return res.status(201).json({ message: "user created" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  login,
  signup,
};
