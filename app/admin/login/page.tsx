"use client";

import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");

    const response = await fetch(
      "/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );

    if (response.ok) {
      localStorage.setItem(
        "isAdmin",
        "true"
      );

      router.push("/admin");
    } else {
      setError(
        "Invalid username or password"
      );
    }
  }

  return (
    <Container maxWidth="sm">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
      >
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              p: 4,
              border: "1px solid #333",
              borderRadius: 2,
              backgroundColor: "#111",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                mb: 4,
                color: "white",
              }}
            >
              Admin Login
            </Typography>

            {error && (
              <Alert
                severity="error"
                sx={{
                  mb: 2,
                }}
              >
                {error}
              </Alert>
            )}

            <Box
              component="form"
              onSubmit={handleLogin}
            >
              <TextField
                label="Username"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) =>
                  setUsername(
                    e.target.value
                  )
                }
                sx={{
                  "& .MuiInputBase-input":
                    {
                      color: "white",
                    },

                  "& .MuiInputLabel-root":
                    {
                      color: "#cccccc",
                    },

                  "& .MuiOutlinedInput-root":
                    {
                      "& fieldset":
                        {
                          borderColor:
                            "#666",
                        },

                      "&:hover fieldset":
                        {
                          borderColor:
                            "#999",
                        },

                      "&.Mui-focused fieldset":
                        {
                          borderColor:
                            "#1976d2",
                        },
                    },
                }}
              />

              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                sx={{
                  "& .MuiInputBase-input":
                    {
                      color: "white",
                    },

                  "& .MuiInputLabel-root":
                    {
                      color: "#cccccc",
                    },

                  "& .MuiOutlinedInput-root":
                    {
                      "& fieldset":
                        {
                          borderColor:
                            "#666",
                        },

                      "&:hover fieldset":
                        {
                          borderColor:
                            "#999",
                        },

                      "&.Mui-focused fieldset":
                        {
                          borderColor:
                            "#1976d2",
                        },
                    },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
}