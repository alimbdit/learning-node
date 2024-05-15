const fs = require('fs');

const readText = fs.readFileSync('texts/read.txt','utf-8');

// console.log(readText)

const writeText = fs.writeFileSync('texts/write.txt', readText+"This is my written text.")

