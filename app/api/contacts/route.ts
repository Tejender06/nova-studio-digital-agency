import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {
    const result = await query(`
      SELECT
        id,
        name,
        email,
        message,
        created_at
      FROM contacts
      ORDER BY created_at DESC
    `);

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to fetch contacts",
      },
      {
        status: 500,
      }
    );
  }
}