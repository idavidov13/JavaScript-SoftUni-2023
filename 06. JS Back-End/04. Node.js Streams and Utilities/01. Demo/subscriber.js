// const { subscribe } = require("./bus");

// function start() {
//   subscribe("ping", onMessage);
// }

// function onMessage(data) {
//   console.log("Recieved message from bus:", data);
// }

// module.exports = { start };

const { emitter } = require("./emitter");

function start() {
  emitter.on("ping", onMessage);
}

function onMessage(data) {
  console.log("Recieved message from bus:", data);
}

module.exports = { start };
