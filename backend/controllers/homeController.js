const home = (req, res) => {
  res.status(200).send("Welcome to movie booking ");
};

module.exports = {
  home,
};
