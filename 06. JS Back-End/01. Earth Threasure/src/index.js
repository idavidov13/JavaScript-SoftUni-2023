const express = require("express");
const { configDatabase } = require("./config/configDatabase");
const { configHbs } = require("./config/configHbs");
const { configExpress } = require("./config/configExpress");
const { configRoutes } = require("./config/configRoutes");
const { register, login } = require("./services/user");
const { createToken, verifyToken } = require("./services/jwt");

start();

async function start() {
  const app = express();

  await configDatabase();
  configHbs(app);
  configExpress(app);
  configRoutes(app);

  app.listen(3000, () => {
    console.log("Server started http://127.0.0.1:3000");
  });
}
