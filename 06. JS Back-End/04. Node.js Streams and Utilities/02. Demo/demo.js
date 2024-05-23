const fs = require("fs");

fs.readFile("./data.html", (err, data) => {
  if (err != null) {
    //handle error
    return;
  }

  console.log(data.toString());
});

const data = [1, 2, 3, 4];
fs.writeFileSync("./data.json", JSON.stringify(data));
