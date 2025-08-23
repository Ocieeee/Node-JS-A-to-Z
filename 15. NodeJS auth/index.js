require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db.js");

connectToDB();
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server listeinnig to PORT", PORT);
});
