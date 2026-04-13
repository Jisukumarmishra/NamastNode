require("dotenv").config();
const {MongoClient} = require("mongodb");

const url = process.env.MONGODB_URI;

if (!url) {
  throw new Error("Missing MONGODB_URI. Add it to your .env file.");
}

const client = new MongoClient(url);

const dbName = process.env.MONGODB_DB_NAME || "Version1";

async function main () {
  // use connect menthod to connect to the server
  await client.connect();

  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('Users');

  const data = {
    firstName : "Billionare",
    secondName : "Millionare",
    city : "Greater Noida",
    PhoneNumber : "2479820938"
  }

  // insert a document
  const insertResult = await collection.insertMany([data]);
  console.log('Inserted documents =>', insertResult);


  // Read
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult); 

  const countResult = await collection.countDocuments({});
  console.log("Count Of The Document in The User Collections =>", countResult);

  return 'done';

}

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());