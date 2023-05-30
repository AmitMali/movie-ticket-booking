const express = require("express");
const {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { encryptPassword, isAuthorized } = require("../middlewares/middleware");
const router = express.Router();

router
  .use(isAuthorized)
  .get("/", getUsers)
  .get("/:userId", getSingleUser)
  .post("/", encryptPassword, createUser)
  .put("/:userId", encryptPassword, updateUser)
  .delete("/:userId", deleteUser);
module.exports = router;
