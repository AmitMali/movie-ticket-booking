require("dotenv").config();
const app = require("./app");

//database connection
const mongoose = require("mongoose");
const { dbConnect } = require("./services/dbService");
dbConnect();
mongoose.connection.setMaxListeners(0);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
