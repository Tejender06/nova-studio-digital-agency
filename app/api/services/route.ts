import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const result = await query(
      "SELECT * FROM services ORDER BY id"
    );

    return NextResponse.json(result.rows, {
      status: 200,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to load services",
      },
      {
        status: 500,
      }
    );
  }
}