import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { isAuthenticated } from "@/lib/auth";

// Get all projects (public)
export async function GET() {
  try {
    const result = await query(
      "SELECT * FROM projects ORDER BY id DESC"
    );

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Error fetching projects:", error);

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

    const body = await request.json();

    const { title, category, image } = body;

    if (
      !title?.trim() ||
      !category?.trim() ||
      !image?.trim()
    ) {
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
    console.error("Error creating project:", error);

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

