require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db.js");

const app = express();

const PORT = process.env.PORT || 5152;

//connect databases
connectToDB();

//middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is now running on", PORT);
});
