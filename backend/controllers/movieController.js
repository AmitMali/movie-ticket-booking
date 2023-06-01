const { getMoviesInRange } = require("../db/db");

const getMoviesPaginated = async (req, res) => {
  const offset = req.params.offset;
  const limit = req.params.limit;
  const movies = await getMoviesInRange(offset, limit);
  res.status(200).json({ movies });
};

module.exports = {
  getMoviesPaginated,
};
