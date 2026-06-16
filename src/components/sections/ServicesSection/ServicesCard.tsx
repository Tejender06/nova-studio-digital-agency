
import { Card, CardContent, Typography } from "@mui/material";
import { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
}

export default function ServicesCard({ service }: ServiceCardProps) {
  return (
    <Card
      tabIndex={0}
      sx={{
        height: "100%",
        transition: "all 0.3s ease",
        cursor: "pointer",

        "&:hover, &:focus": {
          transform: "translateY(-8px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h3" gutterBottom>
          {service.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {service.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
