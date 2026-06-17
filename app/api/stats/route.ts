import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    let stats = [];
    try {
      const result = await query("SELECT * FROM stats ORDER BY id");
      stats = result.rows;
    } catch (e) {
      console.warn("Stats table not found or failed to query, returning hardcoded values", e);
      stats = [
        { label: "Projects Completed", value: 150 },
        { label: "Clients Worldwide", value: 50 },
        { label: "Years Experience", value: 5 },
      ];
    }

    return NextResponse.json(stats, {
      status: 200,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}