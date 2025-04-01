import { Typography } from "@mui/material";

const PageTitle = ({ title }: { title: string }) => (
  <Typography variant="h2" gutterBottom align="center" color="textSecondary">
    {title}
  </Typography>
);

export default PageTitle;
