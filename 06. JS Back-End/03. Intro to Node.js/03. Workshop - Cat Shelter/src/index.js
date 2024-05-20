const http = require("http");
const { homeHandler } = require("./handlers/home");
const { staticFileHandler } = require("./handlers/static");

const routes = {
  "/": homeHandler,
  "/index.html": homeHandler,
};

http
  .createServer((req, res) => {
    const route = routes[req.url];

    if (typeof route === "function") {
      console.log(`Serving route: ${req.url}`);
      route(req, res);
    } else if (staticFileHandler(req, res)) {
      console.log(`Serving static file: ${req.url}`);
      return;
    } else {
      console.log(`Route not found: ${req.url}`);
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("404 Not Found");
      res.end();
    }
  })
  .listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
