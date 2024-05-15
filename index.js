
// custom module
const { a, add } = require("./local-1");
const { a:a2, add:add2 } = require("./local-2");

//! console.log(add(2, 3), a);
//! console.log(add2(2, 3,4), a2);

//& built-in module

const path = require("path");

// console.log(path)

// console.log(path.dirname("C:/projects/Level2webdevelopment/learning-node/index.js"))
console.log(path.parse("C:/projects/Level2webdevelopment/learning-node/index.js"))
// console.log(path.join("C:/projects/Level2webdevelopment/learning-node", "local-1.js"))


