require('dotenv').config();
import { faker } from '@faker-js/faker';
import { MongoClient } from 'mongodb';

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
    const videosCollection = db.collection('videos');
    const videos = Array.from({ length: 50 }, () => ({
      title: faker.lorem.words(),
      channelName: faker.lorem.word(),
      views: faker.number.int(),
      publishDate: faker.date.recent({ days: 30 }),
      length: faker.number.int({ min: 1, max: 60 * 60 * 24 }),
    }));
    await videosCollection.insertMany(videos);
    console.log('Dummy data inserted into videos collection');
  } catch (err) {
    console.log('An error occurred:', err);
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
}

main().catch(console.error);
