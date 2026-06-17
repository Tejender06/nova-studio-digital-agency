import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { username, password } = body;

  if (
    username === "admin" &&
    password === "admin123"
  ) {
    return NextResponse.json({
      success: true,
    });
  }

  return NextResponse.json(
    {
      success: false,
      message: "Invalid credentials",
    },
    {
      status: 401,
    }
  );
}