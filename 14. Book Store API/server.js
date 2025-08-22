require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db.js");
const bookRoutes = require("./routes/book.routes.js");

const app = express();

const PORT = process.env.PORT || 5152;

//connect databases
connectToDB();

//middleware
app.use(express.json());

//route here
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log("Server is now running on", PORT);
});
