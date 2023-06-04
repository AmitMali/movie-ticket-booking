const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const errorMiddleware = (err, req, res, next) => {
  res.json({
    message: "Failed",
    error: err.toString(),
  });
};

//hash password
const encryptPassword = (req, res, next) => {
  const saltRounds = 10;
  if (req.body.password) {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      req.body.password = hash;

      next();
    });
  }
};

const isAuthorized = (req, res, next) => {
  const authorizationToken = req.headers.authorization;
  if (authorizationToken) {
    try {
      const user = jwt.verify(authorizationToken, JWT_SECRET);
      console.log(user);
      next();
    } catch (err) {
      res.status(401).json({
        status: "Failed",
        message: "Token Malformed...",
      });
    }
  } else {
    res.status(401).json({
      status: "Failed",
      message: "Authorization Required",
    });
  }
};

module.exports = { encryptPassword, isAuthorized };
