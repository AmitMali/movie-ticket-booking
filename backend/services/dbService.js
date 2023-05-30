// mongoose db connection
const mongoose = require("mongoose");
const dbConnect = async () => {
  const mongooseAtlasConnectString = process.env.MONGODB_CONNECTION_STRING;
  try {
    await mongoose.connect(mongooseAtlasConnectString, {
      dbName: "movie_booking",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.connection.on("error", (err) => console.log(err));
  } catch (err) {
    console.error(err);
  }
};

module.exports = { dbConnect };
