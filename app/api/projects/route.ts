import { NextResponse } from "next/server";

const projects = [
    {
        id: 1,
        title: "Nova Business Website",
        category: "Web Design",
        image: "/portfolio/project1.jpg",
    },
    {
        id: 2,
        title: "E-Commerce Dashboard",
        category: "Frontend Development",
        image: "/portfolio/project2.jpg",
    },
    {
        id: 3,
        title: "Creative Brand Identity",
        category: "Branding",
        image: "/portfolio/project3.jpg",
    },
]

export async function GET() {
    try {
        return NextResponse.json(projects, {
            status: 200,
        });
    } catch (error) {
        return NextResponse.json(
            { message: "Failed to fetch projects" },
            { status: 500 }
        );
    }
}