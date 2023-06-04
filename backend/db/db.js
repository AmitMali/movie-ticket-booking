const user = require("../models/userSchema");
const movie = require("../models/moviesSchema");

// create user
const createUserDB = async (data) => {
  try {
    await user.create(data);
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
    const loggedInUser = await user.findOne({ email: email });
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
// movie DB operatios
const getMoviesInRange = async (offset, limit) => {
  //get movies are in range of
  //offset : specifies from where to start doccument
  //limit: what amount of documents what to load from db
  try {
    const allMovies = await movie.find().skip(offset).limit(limit).exec();
    return allMovies;
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
  getMoviesInRange,
};
