// validate user
const { getUserByEmail } = require("../db/db");
const bcrypt = require("bcrypt");
const validateUser = async (email, password) => {
  const user = await getUserByEmail(email);
  if (user) {
    bcrypt.compare(password, user.password, (err, result) => {
      return result;
    });
  }
};

module.exports = { validateUser };
