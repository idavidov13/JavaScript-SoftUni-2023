// const { subscribe, unsubscribe } = require("./bus");

// function start() {
//   subscribe("login", onMessage);
// }

// function unsub() {
//   unsubscribe("login", onMessage);
// }

// function onMessage(data) {
//   console.log("Second subscriber receiving message:", data);
// }

// module.exports = { start, unsub };

const { emitter } = require("./emitter");

function start() {
  emitter.on("login", onMessage);
}

function unsub() {
  emitter.off("login", onMessage);
}

function onMessage(data) {
  console.log("Second subscriber receiving message:", data);
}

module.exports = { start, unsub };
