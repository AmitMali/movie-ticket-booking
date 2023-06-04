// validate user
const { getUserByEmail } = require("../db/db");
const bcrypt = require("bcrypt");
const validateUser = async (email, password) => {
  const user = await getUserByEmail(email);
  console.log(password, user.password);
  if (user) {
    bcrypt.compare(password, user.password, (err, result) => {
      return result;
    });
  }
};

module.exports = { validateUser };
