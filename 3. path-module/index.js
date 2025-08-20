const path = require("path");

console.log("Directory Name", path.dirname(__filename));

console.log("File Name", path.basename(__filename));

console.log("file extension", path.extname(__filename));

const joinPath = path.join("/user", "documents", "node");
console.log("joinPath", joinPath);

const resolvePath = path.resolve("/user", "documents", "node");
console.log("Resolve path", resolvePath);

const normalizePath = path.normalize("/user/documents/node");
console.log("Normal", normalizePath);
