require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db.js");
const authRoutes = require("./routes/auth-routes.js");

connectToDB();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server listeinnig to PORT", PORT);
});
