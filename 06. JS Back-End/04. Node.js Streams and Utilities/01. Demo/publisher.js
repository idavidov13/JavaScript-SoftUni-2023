// const { publish } = require("./bus");

// function start() {
//   const data = [1, 2, 3];

//   publish("ping", data);
//   publish("login", { user: "peter", password: "123456" });
// }

// module.exports = { start };

const { emitter } = require("./emitter");

function start() {
  const data = [1, 2, 3];

  emitter.emit("ping", data);
  emitter.emit("login", { user: "peter", password: "123456" });
}

module.exports = { start };
