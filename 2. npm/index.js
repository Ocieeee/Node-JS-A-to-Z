const lodash = require("lodash");

const names = ["sangam", "john", "om"];

const caap = lodash.map(names, lodash.capitalize);

console.log(caap);
