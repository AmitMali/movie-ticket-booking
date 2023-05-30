const user = require("../models/userSchema");

// create user
const createUserDB = async (data) => {
  try {
    const createdUser = await user.create(data);
    return createdUser;
  } catch (err) {
    return err;
  }
};
//getUser by email ID
const getAllUsers = async () => {
  try {
    const allUsers = await user.find();
    return allUsers;
  } catch (err) {
    return err;
  }
};
const getUserByEmail = async (email) => {
  try {
    const loggedInUser = await user.find({ email: email });
    return loggedInUser;
  } catch (err) {
    return err;
  }
};
//getUser by ID
const getUserById = async (userId) => {
  try {
    const loggedInUser = await user.findById(userId);
    return loggedInUser;
  } catch (err) {
    return err;
  }
};

//update user with respect to id
const updateUserById = async (userId, dataToUpdate) => {
  try {
    const updatedUser = await user.findByIdAndUpdate(userId, dataToUpdate, {
      new: true,
    });
    return updatedUser;
  } catch (err) {
    return err;
  }
};
// delete user by id
const deleteUserByID = async (userId) => {
  try {
    const deletedUser = await user.findByIdAndDelete(userId);
    return deletedUser;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createUserDB,
  getUserByEmail,
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUserByID,
};
