import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Project } from "@/types/project";
type Props = {
  project: Project;
};
export default function ProjectCard({ project }: Props) {
  return (
    <Card
      tabIndex={0}
      sx={{
        height: "100%",
        transition: "all 0.3s ease",
        curser: "pointer",

        "&:hover": {
          transform: "translateY(-8px",
          boxShadow: 6,
        },
        "&:focus-visible": {
          outline: "2px solid",
          outlineColor: "primary.main",
          transform: "translateY(-8px",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={project.image}
        alt={`${project.title} project image`}
      />

      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {project.title}
        </Typography>

        <Typography color="text.secondary">{project.category}</Typography>
      </CardContent>
    </Card>
  );
}
