const { log } = require("console");
const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Data folder created");
}

const filePath = path.join(dataFolder, "example.txt");
//sync way of creating

fs.writeFileSync(filePath, "Hello from node js");

console.log("file create succesfully");

//read
const readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log("File content :", readContentFromFile);

fs.appendFileSync(
  filePath,
  "\nThis is new line added to that file to that file"
);
console.log("New file content added");

//async way
const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello async node js", (err) => {
  if (err) throw err;
  console.log("async file is created succesfully");

  fs.readFile(asyncFilePath, "utf-8", (err, data) => {
    console.log("async file content ", data);
  });

  fs.appendFile(asyncFilePath, "\nThis is new file added", (err, data) => {
    if (err) throw err;
    console.log("New line added to async");
  });

  fs.readFile(asyncFilePath, "utf-8", (err, updatedData) => {
    console.log("async file content ", updatedData);
  });
});
