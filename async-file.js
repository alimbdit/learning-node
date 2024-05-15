const fs = require("fs");

// async read file
fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error reading text");
  }
//   console.log(data);
  // async write file
  fs.writeFile("./texts/read2.txt", data+"i am happy!", "utf-8", (err) => {

    if (err) {
      throw Error("writing error")
    }
  });
});

console.log("hey I am now async.");
