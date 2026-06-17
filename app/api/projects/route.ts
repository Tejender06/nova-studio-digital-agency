import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {
    const result = await query(
      "SELECT * FROM projects ORDER BY id DESC"
    );

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to fetch projects",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { title, category, image } = body;

    // Simple validation
    if (!title || !category || !image) {
      return NextResponse.json(
        {
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    const result = await query(
      `
      INSERT INTO projects
      (title, category, image)
      VALUES ($1, $2, $3)
      RETURNING *
      `,
      [title, category, image]
    );

    return NextResponse.json(
      result.rows[0],
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to create project",
      },
      {
        status: 500,
      }
    );
  }
}