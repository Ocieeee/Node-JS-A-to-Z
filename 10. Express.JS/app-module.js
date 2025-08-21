const express = require("express");

//invoked
const app = express();

//app level setting

app.set("view engine", "ejs");

app.get("/", (res, req) => {
  res.send("Home Page");
});

app.post("/api/data", (req, res) => {
  res.json({
    message: "Data Recevied",
    data: req.body,
  });
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("something went wrong");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is now running at port ${port}`);
});
