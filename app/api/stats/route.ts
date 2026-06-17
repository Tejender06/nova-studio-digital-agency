import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {
    // Get statistics from PostgreSQL
    const result = await query(
      "SELECT * FROM stats ORDER BY id"
    );

    return NextResponse.json(result.rows, {
      status: 200,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to fetch statistics",
      },
      {
        status: 500,
      }
    );
  }
}