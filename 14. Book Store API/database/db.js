const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://omchaudhari0003:Chaudhari3@cluster0.ft1pnyk.mongodb.net/"
    );
    console.log("DataBase connect successfully");
  } catch (error) {
    console.error("MongoDb connect failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
