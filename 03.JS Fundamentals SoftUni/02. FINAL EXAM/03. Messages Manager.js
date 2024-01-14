function processMessages(commands) {
  let capacity;
  let users = {};

  function add(username, sent, received) {
    if (!users[username]) {
      users[username] = { sent: sent, received: received };
    }
  }

  function message(sender, receiver) {
    if (users[sender] && users[receiver]) {
      users[sender].sent += 1;
      users[receiver].received += 1;

      [sender, receiver].forEach((user) => {
        if (users[user].sent + users[user].received >= capacity) {
          console.log(`${user} reached the capacity!`);
          empty(user);
        }
      });
    }
  }

  function empty(username) {
    if (username === "All") {
      users = {};
    } else if (users[username]) {
      delete users[username];
    }
  }

  function statistics() {
    console.log(`Users count: ${Object.keys(users).length}`);
    Object.entries(users).forEach(([username, messages]) => {
      console.log(`${username} - ${messages.sent + messages.received}`);
    });
  }

  commands.forEach((command) => {
    const parts = command.split("=");
    const action = parts[0];

    if (action === "Add") {
      const username = parts[1];
      const sent = Number(parts[2]);
      const received = Number(parts[3]);
      add(username, sent, received);
    } else if (action === "Message") {
      const sender = parts[1];
      const receiver = parts[2];
      message(sender, receiver);
    } else if (action === "Empty") {
      const username = parts[1];
      empty(username);
    } else if (action === "Statistics") {
      statistics();
    } else if (!isNaN(parseInt(action))) {
      capacity = parseInt(action);
    }
  });
}

processMessages([
  "12",
  "Add=Bonnie=3=5",
  "Add=Johny=4=4",
  "Empty=All",
  "Add=Bonnie=3=3",
  "Statistics",
]);
