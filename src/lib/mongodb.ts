import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);

export async function getDatabase() {
  await client.connect();
  return client.db(process.env.MONGODB_DB || "");
}

export default client;