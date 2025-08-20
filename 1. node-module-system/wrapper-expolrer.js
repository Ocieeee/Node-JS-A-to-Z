console.log("Node module wrapper demo");

console.log("fileName in expolrer", __filename);
console.log("dirName", __dirname);

module.exports.greet = (name) => {
  console.log(`Hello ${name}`);
};
