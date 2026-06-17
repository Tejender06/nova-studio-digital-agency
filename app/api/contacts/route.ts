import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { isAuthenticated } from "@/lib/auth";

export async function GET() {
  try {
    const authenticated = await isAuthenticated();

    if (!authenticated) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

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
    console.error("Error fetching contacts:", error);

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

