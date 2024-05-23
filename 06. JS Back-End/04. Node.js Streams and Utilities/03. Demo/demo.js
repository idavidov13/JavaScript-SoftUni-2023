const fs = require("fs");

const reader = fs.createReadStream("./data.html", { highWaterMark: 64 });

let data = "";

reader.on("data", (chunk) => {
  process.stdout.write(chunk.toString());
  //data += chunk;
});

reader.on("end", () => {
  console.log("Finished");
  //console.log(data);
});
