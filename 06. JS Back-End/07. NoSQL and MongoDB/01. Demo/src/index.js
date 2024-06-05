const { MongoClient } = require("mongodb");

async function start() {
  const connectionString = "mongodb://localhost:27017";
  const client = new MongoClient(connectionString, {
    useUnifiedTopology: true,
  });

  await client.connect();

  const db = client.db("testdb");
  const collection = db.collection("people");
  const cursor = collection.find({});
  const result = await cursor.toArray();
  console.log(result);
}

start();
