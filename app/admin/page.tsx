"use client";

import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import ContactList from "@/components/admin/ContactList";
import AddProjectForm from "@/components/admin/AddProjectForm";
import ProjectList from "@/components/admin/ProjectList";

export default function AdminPage() {
  const router = useRouter();

  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");

    if (isAdmin !== "true") {
      router.replace("/admin/login");
    }
  }, [router]);

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Box
          sx={{
            py: 6,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 5,
              fontWeight: 600,
            }}
          >
            Admin Dashboard
          </Typography>

          <Box
            sx={{
              mb: 6,
            }}
          >
            <ContactList />
          </Box>

          <Box
            sx={{
              mb: 6,
            }}
          >
            <AddProjectForm
              onProjectAdded={() =>
                setRefresh((prev) => prev + 1)
              }
            />
          </Box>

          <ProjectList refresh={refresh} />
        </Box>
      </motion.div>
    </Container>
  );
}