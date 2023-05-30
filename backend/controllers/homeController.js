const home = (req, res) => {
  res.status(200).send("Welcome to Batch Manager ");
};

module.exports = {
  home,
};
