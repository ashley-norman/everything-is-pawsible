import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import pic from "../img/reception.jpg";
import ContactInfo from "./ContactInfo";
import Hours from "./Hours";

const Hero = () => {
  const theme = useTheme();
  const big = useMediaQuery(theme.breakpoints.up("md"));
  const medium = useMediaQuery(theme.breakpoints.up("sm"));

  const hours = (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h6">Hours</Typography>
        <Hours />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h6">Contact</Typography>
        <ContactInfo />
      </Grid>
    </Grid>
  );
  const title = (
    <Typography
      variant="h2"
      component="h1"
      gutterBottom
      align={medium ? "left" : "center"}
      color={medium ? "inherit" : "primary"}
    >
      Welcome to Everything is Pawsible Kennel!
    </Typography>
  );
  return (
    <Box
      color={(theme) =>
        theme.palette.getContrastText(theme.palette.primary.dark)
      }
      width="100vw"
      position="relative"
    >
      {medium && (
        <Box
          sx={(theme) => ({
            background: `linear-gradient(to right, ${theme.palette.primary.dark} 40%, rgb(0,0,0,0))`,
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: 100,
          })}
        />
      )}
      <Box
        width={big ? "55%" : "60%"}
        position="relative"
        p={6}
        display="flex"
        flexDirection="column"
        maxWidth="700px"
        zIndex={100}
        //   alignItems="center"
      >
        {medium && title}
        {big && hours}
      </Box>
      <img
        src={pic}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
        }}
        alt="hero"
      />
    </Box>
  );
  return (
    <>
      <Box
        // position="relative"
        color={(theme) =>
          theme.palette.getContrastText(theme.palette.primary.dark)
        }
        width="100vw"
        // maxHeight="75vh"
        maxWidth="100%"
        // height="100%"
        display="flex"
        alignItems="center"
      >
        {medium && (
          <Box
            sx={(theme) => ({
              background: `linear-gradient(to right, ${theme.palette.primary.dark} 40%, rgb(0,0,0,0))`,
              position: "absolute",
              height: "100%",
              width: "100%",
            })}
          />
        )}
        <Box
          width={big ? "55%" : "60%"}
          position="absolute"
          p={6}
          display="flex"
          flexDirection="column"
          maxWidth="700px"
          //   alignItems="center"
        >
          {medium && title}
          {big && hours}
        </Box>
        <img
          src={pic}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            maxHeight: "75vh",
          }}
          alt="hero"
        />
      </Box>
      {!big && (
        <Box my={6} mx={2}>
          {!medium && title}
          {hours}
        </Box>
      )}
    </>
  );
};

export default Hero;
