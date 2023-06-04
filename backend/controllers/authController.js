const { createUserDB, getUserByEmail } = require("../db/db");
const { validateUser } = require("../services/authService");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const login = (req, res) => {
  const user = validateUser(req.body.email, req.body.password);
  if (user) {
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.status(200).json({
      login: true,
      message: "user logged in successfully",
      token,
    });
  } else {
    res.status(401).json({
      message: "login failed",
      login: false,
    });
  }
};
const signup = (req, res) => {
  console.log("signup", req.body);
  try {
    if (getUserByEmail(req.body.email)) {
      res
        .status(401)
        .json({
          error: "user allready registred with this mail",
          status: "existing_user",
        });
    } else {
      createUserDB(req.body);
      return res
        .status(201)
        .json({ message: "user created", status: "user_created" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "Internal server error", status: "user_creation_failed" });
  }
};

module.exports = {
  login,
  signup,
};
