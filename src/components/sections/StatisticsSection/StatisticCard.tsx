"use client";
import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
interface StaticCardProps {
  label: string;
  value: number;
  startAnimation: boolean;
}

export default function StatisticCard({
  label,
  value,
  startAnimation,
}: StaticCardProps) {
  const [count, setCount] = useState(0);
 useEffect(() => {
  if (!startAnimation) return;

  let current = 0;

  const increment = Math.ceil(value / 50);

const intervalId = window.setInterval(() => {
  current += increment;

  if (current >= value) {
    current = value;

    window.clearInterval(intervalId);
  }

  setCount(current);
}, 30);

return () => {
  window.clearInterval(intervalId);
};
}, [startAnimation, value]);
  return (
    <Card
      sx={{
        textAlign: "center",
        height: "100%",
      }}
    >
      <CardContent>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
          }}
          gutterBottom
        >
          {count}+
        </Typography>

        <Typography color="textSecondary">{label}</Typography>
      </CardContent>
    </Card>
  );
}
