const {MongoClient} = require("mongodb");

const url = "mongodb+srv://namastedev:iCoki8fFsJdHJvAH@namastenode.cfamcna.mongodb.net/"

const client = new MongoClient(url);

const dbName = "Version1";

async function main () {
  // use connect menthod to connect to the server
  await client.connect();

  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';

}

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());