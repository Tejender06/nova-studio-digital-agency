import { Pool } from "pg";

const globalForPg = global as unknown as { pool: Pool };

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

if (!connectionString) {
  console.warn("DATABASE_URL or POSTGRES_URL is missing. Database queries will fail.");
}

export const pool =
  globalForPg.pool ||
  new Pool({
    connectionString,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : undefined,
  });

if (process.env.NODE_ENV !== "production") globalForPg.pool = pool;

export async function query(text: string, params?: unknown[]) {
  return pool.query(text, params);
}