"use client";

import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleStartProject = async () => {
    try {
      await fetch("/api/analytics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event: "cta_click",
          page: "/",
        }),
      });
    } catch (error) {
      console.error("Analytics Error:", error);
    }

    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fafafa",
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          sx={{
            maxWidth: "700px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              mb: 2,
            }}
          >
            Nova Studio
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontWeight: 700,
              lineHeight: 1.1,
              mb: 3,
              color: "text.primary",
              fontSize: {
                xs: "2.5rem",
                md: "4rem",
              },
            }}
          >
            Building digital experiences that transform brands
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              mb: 5,
              lineHeight: 1.8,
              fontSize: {
                xs: "1rem",
                md: "1.2rem",
              },
            }}
          >
            We design modern websites, build high performance frontend
            applications, and create powerful brand identities for businesses
            that want to stand out online.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={handleStartProject}
              aria-label="Start a Project with Nova Studio"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",

                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              Start a Project
            </Button>

            <Button
              component={Link}
              href="/admin/login"
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              Admin Login
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}