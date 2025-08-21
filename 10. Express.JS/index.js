const express = require("express");

//invoked
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/project", (req, res) => {
  res.send("Hello world from project");
});

//create port and server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
