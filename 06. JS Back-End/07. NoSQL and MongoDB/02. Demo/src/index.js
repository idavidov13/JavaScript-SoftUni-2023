const mongoose = require("mongoose");
const { Person } = require("./models/Person");

async function start() {
  const connectionString = "mongodb://localhost:27017/testdb3";

  await mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Database connected");

  const myPerson = new Person({
    name: "Peter",
    age: 27,
  });

  await myPerson.save();

  const document = await Person.find({});

  console.log(document);
}

start();
