const mongoose = require("mongoose");
require("../models/User");
require("../models/Data"); //TODO import real data model

async function configDatabase() {
  //TODO set database name
  const connectionString = "mongodb://127.0.0.1:27017/exam-db";

  await mongoose.connect(connectionString);

  console.log("Database connected");
}

module.exports = { configDatabase };
