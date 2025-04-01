import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import * as React from "react";

interface Props {
  pic: string;
  text: string | React.ReactNode;
  reverse?: boolean;
  header: string;
}

const Section = ({ pic, text, reverse, header }: Props) => {
  // const classes = useStyles();
  const theme = useTheme();
  const smallWidth = useMediaQuery(theme.breakpoints.down("sm"));

  if (smallWidth) {
    return (
      <Box py={2}>
        <Card>
          <CardMedia src={pic} alt={pic} component="img" />
          <CardContent>
            <Stack divider={<Divider variant="middle" sx={{ mt: 1, mb: 4 }} />}>
              <Typography
                variant="h4"
                component="h2"
                color="primary"
                gutterBottom
                align="center"
              >
                {header}
              </Typography>

              <Typography variant="body1" color="textPrimary">
                {text}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return (
    <Box m={6} position="relative">
      <Card
        sx={(theme) => ({
          height: "300px",
          width: "50%",
          position: "absolute",
          top: "12.5%",
          left: reverse ? "unset" : theme.spacing(11),
          right: reverse ? theme.spacing(11) : "unset",
        })}
      >
        <CardMedia src={pic} height="100%" alt={pic} component="img" />
      </Card>
      <Paper
        color="primary"
        sx={{
          width: "50%",
          float: reverse ? "left" : "right",
        }}
      >
        <Stack
          pr={reverse ? 15 : 4}
          pl={reverse ? 4 : 15}
          py={6}
          alignSelf="flex-end"
          height="400px"
          divider={<Divider variant="middle" sx={{ mt: 1, mb: 4 }} />}
        >
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            gutterBottom
            align="center"
          >
            {header}
          </Typography>
          <Typography variant="body1" color="textPrimary">
            {text}
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Section;
