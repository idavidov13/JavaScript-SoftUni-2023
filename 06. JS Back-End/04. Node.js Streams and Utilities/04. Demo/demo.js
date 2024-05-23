const fs = require("fs");

const writer = fs.createWriteStream("./output.txt");

process.stdin.pipe(writer);
