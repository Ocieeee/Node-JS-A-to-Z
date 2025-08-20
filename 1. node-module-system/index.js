// module exports

const firstModule = require("./first-module.js");

console.log(firstModule.sub(10, 20));

//module wrapper

// (
//     function(export,require,module,__dirName__)
// )

const wrapper = require("./wrapper-expolrer.js");

wrapper.greet("Om chaudhari");
