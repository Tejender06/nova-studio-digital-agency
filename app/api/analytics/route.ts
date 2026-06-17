import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const db = await getDatabase();

    await db.collection("analytics").insertOne({
      eventType: body.event || body.eventType,
      page: body.page,
      timestamp: new Date(),
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const db = await getDatabase();
    const count = await db.collection("analytics").countDocuments();

    return NextResponse.json({
      count,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}