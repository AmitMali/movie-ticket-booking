const {
  createUserDB,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserByID,
} = require("../db/db");

const createUser = (req, res) => {
  try {
    createUserDB(req.body);
    return res.status(201).json({ message: "user created" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getUsers = async (req, res) => {
  const users = await getAllUsers();
  res.status(200).json({ users });
};

const getSingleUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedUser = await updateUserById(userId, req.body);
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    } else {
      return res.status(200).json({ message: "user updated " });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const deletedUser = await deleteUserByID(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    } else {
      return res.status(200).json({ message: "user deleted " });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
