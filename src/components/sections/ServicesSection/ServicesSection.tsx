"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import { Service } from "@/types/service";

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch("/api/services");
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await response.json();
        setServices(data);
      } catch {
        setError(
          "Something went wrong while loading services. Please try again later.",
        );
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        backgroundColor: "#fafafa",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" sx={{textAlign:"center", mb:6,color:"primary.main"}}>
          Our Services
        </Typography>

        {loading && (
          <Box sx={{textAlign:"center"}}>
            <CircularProgress />
          </Box>
        )}
        {error && (
          <Typography color="error" sx={{textAlign:"center"}}>
            {error}
          </Typography>
        )}

        {!loading && !error && (
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.id}>
                <ServicesCard service={service} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
