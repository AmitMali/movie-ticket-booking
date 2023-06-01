const express = require("express");
const { getMoviesPaginated } = require("../controllers/movieController");

const router = express.Router();

router.get("/:offset/:limit", getMoviesPaginated);

module.exports = router;
