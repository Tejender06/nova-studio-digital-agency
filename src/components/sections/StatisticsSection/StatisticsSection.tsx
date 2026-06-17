"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import { Stat } from "@/types/stat";
import StatisticCard from "./StatisticCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StatisticsSection() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/stats");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        setStats(data);
      } catch {
        setError("Unable to load statistics");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Typography sx={{ color: "error", textAlign: "center" }}>
        {error}
      </Typography>
    );
  }

  return (
    <Box component="section" sx={{ py: 8,backgroundColor:"#fafafa"}}>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setStartAnimation(true)}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color:"primary.main"
            }}
            gutterBottom
          >
            Our Achievements
          </Typography>

          <Typography
            sx={{ textAlign: "center", color: "text.secondary", mb: 5 }}
          >
            Some numbers that reflect our experience and growth.
          </Typography>

          <Grid container spacing={3}>
            {stats.map((stat) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={stat.id}>
                <StatisticCard
                  label={stat.label}
                  value={stat.value}
                  startAnimation={startAnimation}
                />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
