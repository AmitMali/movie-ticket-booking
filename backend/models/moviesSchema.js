const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    Title: { type: String, required: true },
    Year: { type: String },
    Rated: { type: String },
    Released: { type: String },
    Runtime: { type: String },
    Genre: { type: String },
    Director: { type: String },
    Writer: { type: String },
    Actors: { type: String },
    Plot: { type: String },
    Language: { type: String },
    Country: { type: String },
    Awards: { type: String },
    Poster: { type: String },
    Ratings: [{ type: String, type: String }],
    Metascore: { type: String },
  },
  { timestamps: true }
);

const userModel = mongoose.model("movies", movieSchema);
module.exports = userModel;
