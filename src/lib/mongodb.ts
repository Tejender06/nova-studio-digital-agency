import { MongoClient } from "mongodb";

// Prevent top-level crash if env variable is missing on Vercel
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);

export async function getDatabase() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not set");
  }
  await client.connect();
  return client.db(process.env.MONGODB_DB || "");
}

export default client;