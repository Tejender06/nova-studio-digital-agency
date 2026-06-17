"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Project } from "@/types/project";

interface ProjectListProps {
  refresh: number;
}

export default function ProjectList({
  refresh,
}: ProjectListProps) {
  const [projects, setProjects] =
    useState<Project[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
    }
    loadProjects();
  }, [refresh]);

  async function fetchProjects() {
    const response = await fetch("/api/projects");
    const data = await response.json();
    setProjects(data);
  }

  async function deleteProject(
    id: number
  ) {
    await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    fetchProjects();
  }

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
        }}
      >
        Portfolio Projects
      </Typography>

      {projects.map((project) => (
        <Card
          key={project.id}
          sx={{
            mb: 2,
            backgroundColor: "#1a1a1a",
            color: "white",
          }}
        >
          <CardContent>
            <Typography variant="h6">
              {project.title}
            </Typography>

            <Typography>
              {project.category}
            </Typography>

            <Button
              color="error"
              onClick={() =>
                deleteProject(project.id)
              }
              sx={{
                mt: 2,
              }}
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}