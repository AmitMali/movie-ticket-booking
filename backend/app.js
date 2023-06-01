//intial configuration
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const apiVersion = "/api/v1";

//route imports
const homeRoutes = require("./routes/homeRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
//middleware
app.use(cors());
app.use(bodyParser.json());

//using routes
app.use(`${apiVersion}/`, homeRoutes);
app.use(`${apiVersion}/auth/`, authRoutes);
app.use(`${apiVersion}/users/`, userRoutes);
app.use(`${apiVersion}/movies/`, movieRoutes);

module.exports = app;
