"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function HeroSection() {
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
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
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
            that want to stand out online
          </Typography>

          <Button
            variant="contained"
            size="large"
            aria-label="Start a Project with Nova Studio"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "1rem",
              transition: "all 0.3s ease",

              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            Start a Project
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
