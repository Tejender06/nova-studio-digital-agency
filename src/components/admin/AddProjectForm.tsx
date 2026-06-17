"use client";

import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";

interface AddProjectFormProps {
  onProjectAdded: () => void;
}

export default function AddProjectForm({
  onProjectAdded,
}: AddProjectFormProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const [success, setSuccess] = useState("");

  async function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault();

    const response = await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
        image,
      }),
    });

    if (response.ok) {
      setSuccess("Project added successfully");

      setTitle("");
      setCategory("");
      setImage("");

      onProjectAdded();
    }
  }

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
        }}
      >
        Add Project
      </Typography>

      {success && (
        <Alert
          severity="success"
          sx={{
            mb: 2,
          }}
        >
          {success}
        </Alert>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 600,
        }}
      >
        <TextField
          label="Project Title"
          fullWidth
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          margin="normal"
          sx={{
            input: {
              color: "white",
            },
            label: {
              color: "#bdbdbd",
            },
          }}
        />

        <TextField
          label="Category"
          fullWidth
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          margin="normal"
          sx={{
            input: {
              color: "white",
            },
            label: {
              color: "#bdbdbd",
            },
          }}
        />

        <TextField
          label="Image URL"
          fullWidth
          value={image}
          onChange={(e) =>
            setImage(e.target.value)
          }
          margin="normal"
          sx={{
            input: {
              color: "white",
            },
            label: {
              color: "#bdbdbd",
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
          }}
        >
          Add Project
        </Button>
      </Box>
    </Box>
  );
}