require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;

const HOSTNAME = process.env.MONGO_DB_HOSTNAME;
const PORT = process.env.MONGO_DB_PORT;
const DB = process.env.MONGO_DB_NAME;
const USERNAME = process.env.MONGO_DB_ROOT_USERNAME;
const PASSWORD = process.env.MONGO_DB_ROOT_PASSWORD;

async function main() {
  const mongodbUri = `mongodb://${USERNAME}:${PASSWORD}@${HOSTNAME}:${PORT}`;
  const client = new MongoClient(mongodbUri);

  try {
    await client.connect();
    console.log(`Connection established with: ${mongodbUri}`);

    const db = client.db(DB);

    const collections = ['videos'];
    await Promise.all(
      collections.map(async (collection) => {
        await db.createCollection(collection);
        console.log(`Collection created: ${collection}`);
      }),
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.stack);
    } else {
      console.error('An unexpected error occurred');
    }
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
}

main().catch(console.error);
